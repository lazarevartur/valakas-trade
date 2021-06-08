import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import mongoose from 'mongoose';
import { getPartnet } from '../../services/partnerService.js';

//мидл для оплаты
// Принимает id пользователя и сумму пополнения
// id = req.user, cost = req.body
export const repleWallet = asyncHandler(async (req, res, next) => {
    const { cost } = req.body;
    const user_id = req.user;

    let user;
    req.isPayd = false;

    try {
        user = await User.findById(user_id).select(
            'wallets Inviting_id total_investment configUser'
        );
    } catch (error) {
        console.log(error);
        return res.status(404).send('Пользователь не найден');
    }

    // пополнение
    if (user && cost > 0) {
        user.wallets.start_account += Number(cost);
        user.total_investment += Number(cost);
        user.save();
        req.isPayd = true;

        const config = user.toObject().configUser.linear_premium;
        let partners_id = user_id;

        for (const prop in config) {
            if (partners_id) {
                partners_id = await getPartnet(
                    partners_id,
                    (partner) => {
                        partner.wallets.bonus_account += cost * config[prop];
                    },
                    'Inviting_id wallets'
                );
            }
        }
    } else {
        return res.status(400).send({
            message: 'Неверная сумма пополнения',
        });
    }

    if (req.isPayd) {
        next();
    } else {
        return res.send('Ошибка при оплате ');
    }

    // if (isPayd) {
    //     console.log('test');
    //     req.params.id = '60ba4772a26370453c4b67b0';
    //     return addProgramsMrx(req, res);
    // }

    // if (user) {
    //     res.json('good');
    // } else {
    //     res.status(400);
    //     throw new Error('no good');
    // }
});
