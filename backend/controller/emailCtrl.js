import asyncHandler from "express-async-handler";
import MailServices from "../services/MailServices.js";

export const sendEmailFromContact = asyncHandler(async (req, res) => {
  try {
    await MailServices.sendContactMassage(req.body);
    return res.send("send");
  } catch (e) {
    return res.send("error");
  }
});
