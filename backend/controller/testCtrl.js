import asyncHandler from "express-async-handler";
import { BillsService } from "../services/billsService.js";
import { walletType } from "../config/walletType.js";
import { UserServices } from "../services/userServices.js";
import User from "../models/userModel.js";
import { SettingServices } from "../services/settingServices.js";
import { ConfigService } from "../services/ConfigService.js";
import { randomInRange } from "../utils/utils.js";
import MailServices from "../services/MailServices.js";
import NewsServices from "../services/newsServices.js";

export const test = asyncHandler(async (req, res) => {
  const s = await NewsServices.last3News();
  return res.send(s);
});
