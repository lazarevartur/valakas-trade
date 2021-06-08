import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

export const dailyUpdate = asyncHandler(async (req, res) => {
    const allUsers = await User.find({}).populate({
        path:
            'partners.first partners.second partners.third partners.fourth partners.fifth',
    });

    allUsers.forEach((user) => {
        console.log('=================================');
        console.log('---------------------------');
        console.log(user.wallets, 'было');
        user.wallets.operating_account += user.wallets.start_account * 0.01;
        console.log(user.wallets, 'стало');
        console.log('---------------------------');

        const partnersLines = Object.values(user.partners.toObject());
        partnersLines.forEach((lines) => {
            if (lines) {
                lines.forEach((partner) => {
                    console.log(
                        partner.wallets.operating_account,
                        '+++++++++++++++++++++++++++++++++++++'
                    );
                    console.log(user.wallets, 'БЫЛО');
                    console.log(partner.wallets.operating_account, 'partner');
                    user.wallets.bonus_account +=
                        partner.wallets.operating_account * 0.01;
                    console.log(user.wallets, 'СТАЛО');
                });
            }
        });

        user.save();
        console.log('=================================');
    });

    res.send('good');
});
