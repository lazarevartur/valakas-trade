import express from "express";
import { regUser, login, addProgramsMrx } from "../controller/authCtrl.js";
import { dailyUpdate } from "../controller/taskPlanner.js";
import { jwtGuard } from "../middleware/passport.js";
// import { repleWallet } from "../middleware/payment/repleWallet.js";
import { payPartners } from "../middleware/payment/payPartners.js";
import { me, team } from "../controller/userCtrl.js";

const router = express.Router();
router.route("/me").get([jwtGuard()], me);
router.route("/team").get([jwtGuard()], team);
// router
//   .route("/byMrxProgram")
//   .post([jwtGuard(), repleWallet, payPartners], addProgramsMrx);
router.route("/dailyUpdate").post([jwtGuard()], dailyUpdate);

export default router;
