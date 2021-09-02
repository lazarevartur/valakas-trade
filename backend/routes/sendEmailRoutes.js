import express from "express";
import { sendEmailFromContact } from "../controller/emailCtrl.js";

const router = express.Router();

router.route("/contacts").post([], sendEmailFromContact);

export default router;
