import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import { getPartnet } from "../../services/partnerService.js";

//Мидл для добовление бонусов партнёрам от пополнения счета
//  cost = req.body сумма пополнения
// bonus = req.userBonus модификатор процентной ставки, если не передан = 0
// currentPartnerId = req.user текущий юзер
export const payPartners = asyncHandler(async (req, res, next) => {
  const { cost } = req.body;
  const bonus = req.userBonus ? req.userBonus : 0;
  let currentUser = req.user;
  let userLinearPremium;

  try {
    userLinearPremium = await User.findById(currentUser)
      .select("configUser.linear_premium partners")
      .lean({ virtuals: true });
  } catch (error) {
    console.log(error);
  }

  const {
    configUser: { linear_premium },
  } = userLinearPremium;

  if (userLinearPremium) {
    const userPremiumArray = Object.values(linear_premium);
    console.log("start");
    for (let i = 0; i < userPremiumArray.length; i++) {
      if (currentUser) {
        const value = userPremiumArray[i];
        currentUser = await getPartnet(
          currentUser._id,
          (partner) => {
            if (i > 2 && !partner.configUser.additional_lines) {
              return;
            }
            partner.wallets.bonus_account += cost * (value + bonus);
          },
          "Inviting_id wallets configUser.additional_lines"
        );
      } else {
        break;
      }
    }
  }

  next();
});
