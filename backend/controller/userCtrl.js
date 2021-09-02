import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { UserServices } from "../services/userServices.js";
import { FileService } from "../services/FileService.js";
import _ from "lodash";
import * as fs from "fs";
import { ConfigService } from "../services/ConfigService.js";

export const me = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;
  let config;
  try {
    user = await User.findById(userId);
    config = await ConfigService.getConfig();
    const mrxPercent = (config.dailyInterest * 100).toFixed(1);
    //const mrx = await user.active_mrx_program;
    const current_optional_program = await user.current_optional_program;
    const optional = current_optional_program
      ? current_optional_program.toObject()
      : {};
    const response = {
      name: user.contact_details.name,
      email: user.email,
      id: user._id,
      totalInvestment: user.total_investment,
      referralIncomeOfPartners: user.referral_income_of_partners,
      referralLink: user.referral_link,
      wallets: user.wallets,
      totalEarned: user.total_earned_all_time,
      mentor_prime: user.metaData.mentor_prime,
      depositAccount: user.wallets.start_account,
      linear_premium: user.metaData.linear_premium,
      dividends: user.metaData.dividends,
      investment_package: user.metaData.investment_package,
      status: user.status,
      isBuyProgram: user.is_buy_program,
      contact_details: user.contact_details,
      income_investment_for_week: user.income_investment_for_week,
      income_referral_program_for_week: user.income_referral_program_for_week,
      programs: {
        mrx: {
          ...user.programs.mrx,
          investment_package: user.metaData.investment_package,
          dividends: user.metaData.dividends,
          linear_premium: user.metaData.linear_premium,
          mrxPercent,
        },
        optional: {
          deposit: user.programs_wallets.options,
          ...optional,
        },
        priority: [...user.programs.priority],
      },
    };

    return res.json(response);
  } catch (e) {
    console.log(e);
  }
  return res.send("bed");
});

export const updateMe = asyncHandler(async (req, res) => {
  const user_id = req.user;
  const delete_img = req.body.delete_img;
  console.log(req.file);
  const user = await UserServices.findById(user_id);
  if (user.status === "error") {
    return res.status(404).json({ contact_details: user });
  }
  let avatarSrc = user.contact_details.avatarImg;
  if (delete_img) {
    await FileService.deleteFile(avatarSrc, "avatar");
    avatarSrc = "";
  } else {
    await FileService.deleteFile(req.file ? avatarSrc : "", "avatar");
  }
  let filePath = req.file ? `${req.file.destination}${req.file.filename}` : "";
  if (filePath) {
    filePath = filePath.replace("./backend", "");
  }
  user.contact_details = {
    ...req.body,
    avatarImg: req.file ? filePath : avatarSrc,
  };
  user.save();
  return res.json({ message: "ok", status: "ok" });
});

export const team = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;
  try {
    user = await User.findById(userId).populate({
      path: "partners.first partners.second partners.third partners.fourth metaData",
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
      team_turnover: await user.personal_team_turnover,
    };

    return res.json(response);
  } catch (e) {
    console.log(e);
    return res.send(e);
  }
});
// {
//   name: '',
//   middle_name: '',
//   surname: '',
//   city: '',
//   phone_number: '',
//   telegram: '',
//   whatsApp: '',
//   avatarImg: '',
//   other: '',
//   WhatsApp: ''
// }
