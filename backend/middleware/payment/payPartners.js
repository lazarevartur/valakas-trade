import asyncHandler from 'express-async-handler';
import User from '../../models/userModel.js';
import { getPartnet } from '../../services/partnerService.js';

//Мидл для добовление бонусов партнёрам от пополнения счета
//  cost = req.body сумма пополнения
// bonus = req.userBonus модификатор процентной ставки, если не передан = 0
// currentPartnerId = req.user текущий юзер
export const payPartners = asyncHandler(async (req, res, next) => {
    const { cost } = req.body;
    const bonus = req.userBonus ? req.userBonus : 0;
    let currentPartnerId = req.user;
    let userLinearPremium;

    try {
        userLinearPremium = await User.findById(currentPartnerId)
            .select('partners.additional_lines configUser.linear_premium')
            .lean();
    } catch (error) {
        console.log(error);
    }
    const {
        partners: { additional_lines },
        configUser: { linear_premium },
    } = userLinearPremium;

    if (userLinearPremium) {
        const userPremiumArray = Object.values(linear_premium);

        for (let i = 0; i < userPremiumArray.length; i++) {
            if (currentPartnerId) {
                const value = userPremiumArray[i];
                if (i > 2 && !additional_lines) {
                    break;
                }
                console.log(value + bonus);
                currentPartnerId = await getPartnet(
                    currentPartnerId,
                    (partner) => {
                        partner.wallets.bonus_account += cost * (value + bonus);
                    },
                    'Inviting_id wallets'
                );
            } else {
                break;
            }
        }
    }

    next();
});
