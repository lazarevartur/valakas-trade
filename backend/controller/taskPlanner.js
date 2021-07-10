import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import optionalProgram from "../models/optionalProgramModel.js";
import {
  activateOptional,
  chekCurrentOptionalProgram,
  resetPrograms,
} from "../services/programsService.js";

export const dailyUpdate = asyncHandler(async (req, res) => {
  const dailyInterest = req.body.dailyInterest || 0.02;
  const mapLines = {
    0: "first",
    1: "second",
    2: "third",
    3: "fourth",
  };
  try {
    const allUsers = await User.find({}).populate({
      path:
        "partners.first partners.second partners.third partners.fourth partners.fifth metaData.partners",
    });
    console.log(allUsers);
    const userIncomeMap = {};
    // Каждый день капает от 0.1-2% от MRX  ( линейный доход )
    const stageOne = allUsers.map((user) => {
      const income = user.programs_wallets.mrx * dailyInterest;
      userIncomeMap[user.email] = income;
      user.wallets.operating_account += income;
      user.metaData.investment_package += income;

      return user.save();
    });

    const stageTwo = await Promise.all(stageOne);
    // Каждый день капает от 5-2% от линейного дохода партнеров ( дивиденды )
    stageTwo.map((user) => {
      //console.log("START");
      const partnersLines = Object.values(user.partners.toObject());
      //console.log(user.email, "email");
      // Линия партнера
      partnersLines.forEach((lines, line) => {
        if (lines.length) {
          // партнеры в линии
          let totalPartnerIncome = 0;
          lines.forEach((partner, i) => {
            //console.log(partner.email, `line:${line + 1} partner:${i + 1} `);
            const lineRate = +`0.0${line}`;
            const interestRate = +(0.05 - lineRate).toFixed(2);
            const partnerIncome = userIncomeMap[partner.email] * interestRate;
            totalPartnerIncome += partnerIncome;
            user.wallets.bonus_account += partnerIncome;
            user.referral_income_of_partners += partnerIncome;
            user.metaData.partners[mapLines[line]] += partnerIncome;
            user.metaData.dividends += partnerIncome;
          });

          // Доход партнеров за неделю
          user.metaData.partners_profit_for_week[mapLines[line]].push(
            totalPartnerIncome
          );
          if (
            user.metaData.partners_profit_for_week[mapLines[line]].length > 14
          ) {
            const curr = user.metaData.partners_profit_for_week[mapLines[line]];
            const lastWeek = curr.slice(7, 14);
            user.metaData.partners_profit_for_week[mapLines[line]] = lastWeek;
          }

          //console.log("--------------");
        }
      });

      return user.save();
    });
    //TASKS PLANER
    nextDay();

    res.send({
      status: 0,
      statusCode: "success",
      message: "Successfully update.",
    });
  } catch (error) {
    return res.send({
      status: 1,
      statusCode: "error",
      message: error.message,
    });
  }
});
export const nextDay = asyncHandler(async () => {
  //await activateOptional(2);
  await chekCurrentOptionalProgram();
  return true;
});
