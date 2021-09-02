import express from "express";
import {
  changeMrxPercent,
  createQiwi,
  deleteBillByid,
  editBillById,
  editUserByEmail,
  findAvangard,
  getAllPayments,
  getCompletedPayments,
  getPayment,
  getPendingPayments,
  getSettings,
  getUserByEmail,
  rejectedPayment,
  rejectedWithdrawal,
  resetPayment,
  successPayment,
  successWithdrawal,
} from "../controller/adminCtrl.js";

const router = express.Router();

router.route("/settings").get(getSettings);
router.route("/payments/success/:payment_id").get(successPayment);
router.route("/payments/rejected/:payment_id").get(rejectedPayment);
router.route("/payments/success-withdrawal/:payment_id").get(successWithdrawal);
router
  .route("/payments/rejected-withdrawal/:payment_id")
  .get(rejectedWithdrawal);
router.route("/payments/reset/:payment_id").get(resetPayment);
router.route("/payments").get(getAllPayments);
router.route("/payments/pending").get(getPendingPayments);
router.route("/payments/completed").get(getCompletedPayments);
router.route("/payments/:payment_id").get(getPayment);
router.route("/users/findByEmail/:email").get(getUserByEmail);
router.route("/users/findAvangard/:id").get(findAvangard);
//post
router.route("/users/edit").post(editUserByEmail);
router.route("/settings/bill").post(createQiwi);
//patch
router.route("/settings").patch(changeMrxPercent);
router.route("/settings/bill").patch(editBillById);
//delete
router.route("/settings/bill/:id").delete(deleteBillByid);
export default router;
