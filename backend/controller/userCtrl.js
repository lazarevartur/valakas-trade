import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const me = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;
  try {
    user = await User.findById(userId);
    const response = {
      name: user.contact_details.name,
      email: user.email,
      id: user._id,
      totalInvestment: user.total_investment,
      referralIncomeOfPartners: user.referral_income_of_partners,
      referralLink: user.referral_link,
      wallets: user.wallets,
      totalEarned: user.total_earned,
      depositAccount: user.deposit_account,
      linear_premium: user.metaData.incomeFromLines.linear_premium,
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
      path: "partners.first partners.second partners.third partners.fourth",
      select: "email",
    });

    const response = {
      status: user.status,
      referralIncomeOfPartners: user.referral_income_of_partners,
      partners: user.partners,
      totalEarned: user.total_earned,
      id: user._id,
      referralLinkCounter: user.referral_link_counter,
      meta: user.metaData.incomeFromLines,
    };

    return res.json(response);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});
