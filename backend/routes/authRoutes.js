import express from "express";
import {
  regUser,
  login,
  addProgramsMrx,
  chekAuth,
} from "../controller/authCtrl.js";
import { dailyUpdate } from "../controller/taskPlanner.js";
import { jwtGuard } from "../middleware/passport.js";
// import { repleWallet } from "../middleware/payment/repleWallet.js";
import { payPartners } from "../middleware/payment/payPartners.js";

const router = express.Router();
router.route("/register").post(regUser);
router.route("/login").post(login);
// router
//   .route("/byMrxProgram")
//   .post([jwtGuard(), repleWallet, payPartners], addProgramsMrx);
router.route("/dailyUpdate").post([jwtGuard()], dailyUpdate);
router.route("/chek-auth").get([jwtGuard()], chekAuth);

export default router;
