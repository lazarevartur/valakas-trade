import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import { getPartnet } from "../../services/partnerService.js";

//Мидл для добовление бонусов партнёрам от пополнения счета
//  amount = req.body сумма пополнения
// bonus = req.userBonus модификатор процентной ставки, если не передан = 0
// currentPartnerId = req.user текущий юзер
export const payPartners = asyncHandler(async (req, res, next) => {
  const { amount } = req.body;
  const bonus = req.userBonus ? req.userBonus : 0;
  const mapLines = {
    0: "first",
    1: "second",
    2: "third",
    3: "fourth",
  };
  let currentUser = req.user;
  let userLinearPremium;

  try {
    userLinearPremium = await User.findById(currentUser).select(
      "configUser.linear_premium partners metaData"
    );
  } catch (error) {
    console.log(error);
  }
  //console.log(userLinearPremium, "userLinearPremium");
  const {
    configUser: { linear_premium },
  } = userLinearPremium;

  if (userLinearPremium) {
    const userPremiumArray = Object.values(linear_premium).filter(
      (i) => typeof i === "number"
    );
    //console.log(userPremiumArray, "linear_premium");
    for (let i = 0; i <= userPremiumArray.length; i++) {
      if (currentUser) {
        const value = userPremiumArray[i];

        currentUser = await getPartnet(
          currentUser._id,
          (partner) => {
            if (i > 2 && !partner.configUser.additional_lines) {
              return;
            }
            const income = amount * (value + bonus);
            partner.wallets.bonus_account += income;
            partner.referral_income_of_partners += income;
            partner.metaData.partners[mapLines[i]] += income;
            partner.metaData.linear_premium += income;
            const profit = partner.metaData.profit_referral_program_for_week;
            const profitLength = profit.length;
            profit.set(
              [profitLength - 1],
              (profit[[profitLength - 1]] += income)
            );
          },
          `Inviting_id wallets configUser.additional_lines referral_income_of_partners
         metaData`
        );
      } else {
        break;
      }
    }
  }

  next();
});
