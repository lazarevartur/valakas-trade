import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { chekCurrentOptionalProgram } from "../services/programsService.js";
import { UserServices } from "../services/userServices.js";
import { makeCounter, randomInRange } from "../utils/utils.js";
import { ConfigService } from "../services/ConfigService.js";

export const updateEveryDayLocal = async (req, res) => {
  const config = await ConfigService.getConfig();
  let dailyInterest = 0.015;
  if (config.autoDailyInterest) {
    const randomInterest = randomInRange(0.7, 1.5).toFixed(3);
    const newConfig = await ConfigService.changeMrxPercent(
      randomInterest,
      config.autoDailyInterest
    );
    dailyInterest = newConfig.dailyInterest;
  } else {
    dailyInterest = config.dailyInterest;
  }
  const mapLines = {
    0: "first",
    1: "second",
    2: "third",
    3: "fourth",
  };
  try {
    const allUsers = await User.find({}).populate({
      path: "partners.first partners.second partners.third partners.fourth partners.fifth metaData.partners",
    });
    const userIncomeMap = {};

    const users = allUsers.map((user) => {
      UserServices.setNextStatusMentorLvl(user);
      return user.save();
    });

    const stageZero = await Promise.all(users);

    // Каждый день капает от 0.1-2% от MRX  ( начисления по инвест пакету )
    const stageOne = stageZero.map((user) => {
      const income = user.programs_wallets.mrx * dailyInterest;
      userIncomeMap[user.email] = income;
      user.wallets.operating_account += income;
      user.metaData.investment_package += income;
      // Доход пользователя за неделю
      user.metaData.profit_investment_for_week.push(income);
      if (user.metaData.profit_investment_for_week.length > 14) {
        const curr = user.metaData.profit_investment_for_week;
        const lastWeek = curr.slice(7, 14);
        user.metaData.profit_investment_for_week = lastWeek;
      }

      return user.save();
    });

    const stageTwo = await Promise.all(stageOne);
    // Каждый день капает от 5-2% от линейного дохода партнеров ( дивиденды )
    stageTwo.map((user) => {
      let isNewDay = true;
      //console.log("START");
      const partnersLines = Object.values(user.partners.toObject());
      //console.log(user.email, "email");
      // Линия партнера
      //console.log(user.email, "emailUSER");
      partnersLines.forEach((lines, line) => {
        if (lines.length) {
          // партнеры в линии
          let totalPartnerIncome = 0;
          lines.forEach((partner, i) => {
            // console.log(partner.email, `line:${line + 1} partner:${i + 1} `);
            //console.log(user.wallets.bonus_account, "start");
            const lineRate = +`0.0${line}`;
            const interestRate = +(0.05 - lineRate).toFixed(2);
            const partnerIncome = userIncomeMap[partner.email] * interestRate;
            totalPartnerIncome += partnerIncome;
            user.wallets.bonus_account += partnerIncome;
            user.referral_income_of_partners += partnerIncome;
            user.metaData.partners[mapLines[line]] += partnerIncome;
            user.metaData.dividends += partnerIncome;
            //console.log(partnerIncome, "partnerIncome");
          });
          // Доход пользователя по реферальной программе за неделю
          if (isNewDay) {
            user.metaData.profit_referral_program_for_week.push(
              totalPartnerIncome
            );
          } else {
            const profit = user.metaData.profit_referral_program_for_week;
            const profitLength = profit.length;
            profit.set(
              [profitLength - 1],
              (profit[[profitLength - 1]] += totalPartnerIncome)
            );
          }

          if (user.metaData.profit_referral_program_for_week.length > 14) {
            const curr = user.metaData.profit_referral_program_for_week;
            const lastWeek = curr.slice(7, 14);
            user.metaData.profit_referral_program_for_week = lastWeek;
          }

          // чекаем новый день
          isNewDay = false;

          // Доход партнеров за неделю по линиям
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
    await ConfigService.incrementDay();
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
};
export const nextDay = asyncHandler(async () => {
  await chekCurrentOptionalProgram();
  return true;
});
