import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const dailyUpdate = asyncHandler(async (req, res) => {
    const dailyInterest = req.body.dailyInterest || 0.02;
    try {
        const allUsers = await User.find({}).populate({
            path:
                'partners.first partners.second partners.third partners.fourth partners.fifth',
        });
        const userIncomeMap = {};
        // Каждый день капает от 0.1-2% от суммы депозита ( линейный доход )
        const stageOne = allUsers.map((user) => {
            const income = user.wallets.start_account * dailyInterest;
            userIncomeMap[user.email] = income;
            user.wallets.operating_account += income;

            return user.save();
        });
        // Каждый день капает от 5-2% от линейного дохода партнеров ( дивиденды )
        const stageTwo = await Promise.all(stageOne);

        stageTwo.map((user) => {
            const partnersLines = Object.values(user.partners.toObject());
            console.log(user.email, 'email');
            partnersLines.forEach((lines, line) => {
                if (lines.length) {
                    lines.forEach((partner, i) => {
                        console.log(
                            partner.email,
                            `line:${line + 1} partner:${i + 1} `
                        );
                        const interestRate = +(0.05 - +`0.0${line}`).toFixed(2);
                        const partnerIncome = userIncomeMap[partner.email];
                        user.wallets.bonus_account +=
                            partnerIncome * interestRate;
                    });

                    console.log('--------------');
                }
            });

            return user.save();
        });

        res.send({
            status: 0,
            statusCode: 'success',
            message: 'Successfully update.',
        });
    } catch (error) {
        return res.send({
            status: 1,
            statusCode: 'error',
            message: error.message,
        });
    }
});
