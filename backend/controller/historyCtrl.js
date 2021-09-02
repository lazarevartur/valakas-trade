import asyncHandler from "express-async-handler";
import { PaymentService } from "../services/paymentService.js";

export const pendingHistoryUser = asyncHandler(async (req, res) => {
  const user_id = req.user;
  const userHistory = await PaymentService.getUserPaymentPendingByUserId(
    user_id
  );
  if (userHistory.status === "error") {
    return res.status(400).json({
      ...userHistory,
    });
  }
  console.log(userHistory);
  res.json(userHistory);
});
export const completedHistoryUser = asyncHandler(async (req, res) => {
  const user_id = req.user;
  const userHistory = await PaymentService.getUserPaymentCompletedByUserId(
    user_id
  );
  if (userHistory.status === "error") {
    return res.status(400).json({
      ...userHistory,
    });
  }

  res.json(userHistory);
});
