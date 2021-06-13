import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import mongoose from 'mongoose';

// мидл для оплаты
// Принимает id пользователя и сумму пополнения
// id = req.user, cost = req.body
// в req.isPayd кладет ответ от оплаты bool
export const repleWallet = asyncHandler(async (req, res, next) => {
    const { cost } = req.body;
    const user_id = req.user;

    let user;
    req.isPayd = false;

    try {
        user = await User.findById(user_id).select(
            'Inviting_id total_investment configUser.linear_premium programs_walets'
        );
    } catch (error) {
        console.log(error);
        return res.status(404).send('Пользователь не найден');
    }

    // пополнение
    if (user && cost > 0) {
        user.programs_walets.mrx += Number(cost);
        user.total_investment += Number(cost);
        user.save();
        req.isPayd = true;
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
});
