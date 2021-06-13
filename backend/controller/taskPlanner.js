import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

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
        "partners.first partners.second partners.third partners.fourth partners.fifth metaData.incomeFromLines",
    });
    const userIncomeMap = {};
    // Каждый день капает от 0.1-2% от MRX  ( линейный доход )
    const stageOne = allUsers.map((user) => {
      const income = user.programs_walets.mrx * dailyInterest;
      userIncomeMap[user.email] = income;
      user.wallets.operating_account += income;

      return user.save();
    });

    const stageTwo = await Promise.all(stageOne);
    // Каждый день капает от 5-2% от линейного дохода партнеров ( дивиденды )
    stageTwo.map((user) => {
      console.log("START");
      const partnersLines = Object.values(user.partners.toObject());
      console.log(user.email, "email");
      // Линия партнера
      partnersLines.forEach((lines, line) => {
        if (lines.length) {
          // партнеры в линии
          lines.forEach((partner, i) => {
            console.log(partner.email, `line:${line + 1} partner:${i + 1} `);
            const lineRate = +`0.0${line}`;
            const interestRate = +(0.05 - lineRate).toFixed(2);
            const partnerIncome = userIncomeMap[partner.email] * interestRate;
            user.wallets.bonus_account += partnerIncome;
            user.referral_income_of_partners += partnerIncome;
            user.metaData.incomeFromLines[mapLines[line]] += partnerIncome;
          });

          console.log("--------------");
        }
      });

      return user.save();
    });

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
