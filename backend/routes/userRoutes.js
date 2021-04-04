import express from "express";
import { regUser, login, repleWallet } from "../controller/authCtrl.js";

const router = express.Router();
//auth routs and ref
// /api/auth
router.route("/").post(regUser);
router.route("/login").post(login);
router.route("/addCoast").post(repleWallet);

export default router;
