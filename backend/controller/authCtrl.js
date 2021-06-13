import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import _ from 'lodash';
import mongoose from 'mongoose';

import { generateToken } from '../utils/utils.js';
import { roles } from '../config/role.js';
import { getDayinMm } from '../utils/utils.js';
import Program from '../models/programModel.js';

// @desc Register new user
// @route POST /api/auth/
// @access Public
export const regUser = asyncHandler(async (req, res) => {
    const { email, password, name, ref } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({ email, password, name });
    //TODO REFACTORING
    if (ref) {
        const firstLine = await User.findById(ref);
        if (firstLine) {
            firstLine.partners.first.push(user._id);
            //присваеваем id пригласителя
            user.Inviting_id = firstLine._id;
            // увеличиваем у пригласителя счетчик на 1
            firstLine.referralLinkCounter += 1;
            firstLine.save();
            if (firstLine.Inviting_id) {
                const secondLine = await User.findById(firstLine.Inviting_id);
                secondLine.partners.second.push(user._id);
                secondLine.save();
                if (secondLine.Inviting_id) {
                    const thirdLine = await User.findById(
                        secondLine.Inviting_id
                    );
                    thirdLine.partners.third.push(user._id);
                    thirdLine.save();
                }
            }
        }
    }

    user.referralLink = user._id;

    user.save();
    if (user) {
        res.json(getUserWithToken(user));
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc login user && get token
// @route POST /api/auth/login
// @access Public
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    let user;
    // ищем в базе пользователя по email
    try {
        user = await User.findOne({ email }).populate({
            path: `partners.first partners.second partners.third`,
            select: 'referral_link_counter',
        });
    } catch (error) {
        console.log(error);
    }

    // const endingTime = (day) => Number(24 * 60 * 60 * 1000 * day);
    // console.log(Date.now() + endingTime(200));
    // const result = {
    //     referralLinkCounter: 0,
    // };

    // const partners = user.partners;
    // for (const u in partners) {
    //     if (user.partners.hasOwnProperty(u)) {
    //         if (Array.isArray(user.partners[u])) {
    //             user.partners[u].forEach((t) => {
    //                 result.referralLinkCounter += t.referralLinkCounter
    //                     ? t.referralLinkCounter
    //                     : 0;
    //             });
    //         }
    //     }
    // }

    // console.log(result);
    // console.log(program);
    // проверяем есть ли пользователь и если есть проверяем его пароль

    if (user && (await user.matchPassword(password))) {
        return res.json(getUserWithToken(user));
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc buy programs by id and user
// @route POST /api/programs/:id
// @access Private
export const addProgramsMrx = asyncHandler(async (req, res) => {
    const program_id = req.body.program_id;
    const user_id = req.user;
    let program;
    let user;

    if (!req.isPayd) {
        return res.status(400).json({
            message: 'Вы не оплатили!',
            status: 'Ok',
        });
    }

    if (
        mongoose.isValidObjectId(program_id) &&
        mongoose.isValidObjectId(user_id)
    ) {
        try {
            program = await Program.findById(program_id).lean();
            user = await User.findById(user_id);
            const endTime = Date.now() + getDayinMm(program.validity);
            const programIsActive = user.programs.mrx.find((item) => {
                return item.program == program_id;
            });
            if (!programIsActive) {
                user.programs.mrx.push({
                    ending_time: endTime,
                    program: program._id,
                });
                user.save();
                req.isPayd = false;

                return res.json({
                    message: 'Программа успешно купленна',
                    status: 'ok',
                });
            } else {
                return res.json({
                    message: 'Нельзя купить одинаковые программы',
                    status: 'ok',
                });
            }
        } catch (error) {
            console.log(error);
            return res
                .status(404)
                .json({ message: 'Программа или пользователь не найден' });
        }
    }
    return res.status(404).json({ message: 'Не верные данные' });
});

// @desc buy programs by id and user
// @route POST /api/programs/:id
// @access Private
export const exemple = asyncHandler(async (req, res) => {});

//Exemple
const getUserWithToken = (user) => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        access: roles.user,
    };
};

export const repleWallet = asyncHandler(async (req, res) => {
    const { count } = req.body;
    const user_id = req.user;
    let isPayd = false;
    const user = await User.findById(user_id).select(
        'wallets Inviting_id total_investment'
    );

    console.log(user);
    if (user && count > 0) {
        user.wallets.start_account += Number(count);
        user.save();
        isPayd = true;

        const firstLine = await User.findById(user.invitingId);
        if (firstLine) {
            firstLine.incomeFromPartners.depositIncome += 100;
            firstLine.save();
            if (firstLine.invitingId) {
                const secondLine = await User.findById(firstLine.invitingId);
                secondLine.incomeFromPartners.depositIncome += 10;
                secondLine.save();
                if (secondLine.invitingId) {
                    const thirdLine = await User.findById(
                        secondLine.invitingId
                    );
                    thirdLine.incomeFromPartners.depositIncome += 1;
                    thirdLine.save();
                }
            }
        }
    }
    if (isPayd) {
        console.log('test');
        req.params.id = '60ba4772a26370453c4b67b0';
        return addProgramsMrx(req, res);
    }

    if (user) {
        res.json('good');
    } else {
        res.status(400);
        throw new Error('no good');
    }
});
