import express from "express";
import { jwtGuard } from "../middleware/passport.js";
import {
  buyMrxProgram2,
  buyOptionalProgram,
  buyPriorityProgram,
  getBills,
  replenishmentRequest,
  replePayeer,
  repleWallet,
  transferWallet,
  withdrawalRequest,
} from "../controller/walletCtrl.js";
import { payPartners } from "../middleware/payment/payPartners.js";
import { checkUserStartAccount } from "../middleware/payment/checkUserStartAccount.js";
import { payPartnersOptional } from "../middleware/payment/payPartnerOptional.js";

const router = express.Router();
router.route("/reple-wallet").post([jwtGuard()], repleWallet);
router.route("/transfer").post([jwtGuard()], transferWallet);
router.route("/reple-request").post([jwtGuard()], replenishmentRequest);
router.route("/withdrawal-request").post([jwtGuard()], withdrawalRequest);

router.route("/reple-payeer-card").post([jwtGuard()], replenishmentRequest);
router.route("/reple-payeer").post([jwtGuard()], replePayeer);

router
  .route("/buy-mrx")
  .post([jwtGuard(), checkUserStartAccount, payPartners], buyMrxProgram2);
router
  .route("/buy-optional")
  .post([jwtGuard(), payPartnersOptional], buyOptionalProgram);

router
  .route("/buy-priority")
  .post([jwtGuard(), checkUserStartAccount, payPartners], buyPriorityProgram);
router.route("/bills/").get([jwtGuard()], getBills);

export default router;
