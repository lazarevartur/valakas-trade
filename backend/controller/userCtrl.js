import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import optionalProgram from "../models/optionalProgramModel.js";

export const me = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;

  try {
    user = await User.findById(userId);
    const mrx = await user.active_mrx_program;
    const optional = await user.current_optional_program;
    console.log(optional);
    const response = {
      name: user.contact_details.name,
      email: user.email,
      id: user._id,
      totalInvestment: user.total_investment,
      referralIncomeOfPartners: user.referral_income_of_partners,
      referralLink: user.referral_link,
      wallets: user.wallets,
      totalEarned: user.total_earned,
      depositAccount: user.wallets.start_account,
      linear_premium: user.metaData.linear_premium,
      dividends: user.metaData.dividends,
      investment_package: user.metaData.investment_package,
      programs: {
        activeMrx: {
          ...mrx,
          deposit: user.programs_wallets.mrx,
          investment_package: user.metaData.investment_package,
          dividends: user.metaData.dividends,
          linear_premium: user.metaData.linear_premium,
        },
        optional: {
          deposit: user.programs_wallets.options,
          optional,
        },
      },
    };
    return res.json(response);
  } catch (e) {
    console.log(e);
  }
  return res.send("bed");
});

export const team = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;
  try {
    user = await User.findById(userId).populate({
      path:
        "partners.first partners.second partners.third partners.fourth metaData",
      select: "email",
    });
    const response = {
      status: user.status,
      referralIncomeOfPartners: user.referral_income_of_partners,
      partners: user.partners,
      totalEarned: user.total_earned,
      id: user._id,
      referralLinkCounter: user.referral_link_counter,
      meta: user.metaData,
      total_number_partners: user.total_number_partners,
      quantity_for_each_line: user.quantity_for_each_line,
      income_partner_for_week: user.income_partner_for_week,
      deposit_account: user.deposit_account,
    };

    return res.json(response);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});
