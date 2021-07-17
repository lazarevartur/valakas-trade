import express from "express";
import { jwtGuard } from "../middleware/passport.js";
import {
  repleWallet,
  buyMrxProgram,
  buyOptionalProgram,
  buyPriorityProgram,
} from "../controller/walletCtrl.js";
import { payPartners } from "../middleware/payment/payPartners.js";
import { checkUserStartAccount } from "../middleware/payment/checkUserStartAccount.js";

const router = express.Router();
router.route("/reple-wallet").post([jwtGuard()], repleWallet);
router
  .route("/buy-mrx")
  .post([jwtGuard(), checkUserStartAccount, payPartners], buyMrxProgram);
router
  .route("/buy-optional")
  .post([jwtGuard(), payPartners], buyOptionalProgram);

router
  .route("/buy-priority")
  .post([jwtGuard(), checkUserStartAccount, payPartners], buyPriorityProgram);

export default router;
