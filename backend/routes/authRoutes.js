import express from "express";
import { chekAuth, login, regUser } from "../controller/authCtrl.js";
import { updateEveryDayLocal } from "../controller/taskPlanner.js";
import { jwtGuard } from "../middleware/passport.js";
// import { repleWallet } from "../middleware/payment/repleWallet.js";
import { isDev } from "../utils/utils.js";

const router = express.Router();
router.route("/register").post(regUser);
router.route("/login").post(login);
// router
//   .route("/byMrxProgram")
//   .post([jwtGuard(), repleWallet, payPartners], addProgramsMrx);
isDev(() => {
  router.route("/dailyUpdate").post(updateEveryDayLocal);
});

router.route("/chek-auth").get([jwtGuard()], chekAuth);

export default router;
