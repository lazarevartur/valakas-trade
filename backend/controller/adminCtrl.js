import asyncHandler from "express-async-handler";
import { PaymentService } from "../services/paymentService.js";
import { walletService } from "../services/walletService.js";
import { paymentStatus } from "../config/paymentStatus.js";
import { UserServices } from "../services/userServices.js";
import { SettingServices } from "../services/settingServices.js";
import { ConfigService } from "../services/ConfigService.js";
import { BillsService } from "../services/billsService.js";
import { walletType } from "../config/walletType.js";
import { exchangeRates } from "../config/exchangeRates.js";

export const successPayment = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;

  const payment = await PaymentService.success(payment_id);

  if (payment.status === "error") {
    return res.status(404).json(payment);
  }
  if (payment.from_where_payment === walletType.qiwi) {
    await BillsService.editBillByRequisites(
      payment.bill,
      payment.amount * exchangeRates.ru
    );
  } else {
    await BillsService.editBillByRequisites(payment.bill, payment.amount);
  }

  const resp = await walletService.repleWallet(payment.user_id, payment.amount);
  return res.send(resp);
});

export const rejectedPayment = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;

  const payment = await PaymentService.rejected(payment_id);

  if (payment.status === "error") {
    return res.status(400).json(payment);
  }
  return res
    .status(200)
    .json({ massage: `Платеж ${payment_id} отменен`, status: "ok" });
});

export const successWithdrawal = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;

  const payment = await PaymentService.success(payment_id);

  if (payment.status === "error") {
    return res.status(404).json(payment);
  }

  return res.json({
    message: `Успешный выввод ${payment.amount}`,
    status: "ok",
  });
});

export const rejectedWithdrawal = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;

  const payment = await PaymentService.rejected(payment_id);

  if (payment.status === "error") {
    return res.status(400).json(payment);
  }
  const resp = await walletService.increaseStartAccount(
    payment.user_id,
    payment.amount
  );
  return res
    .status(200)
    .json({ massage: `Платеж на вывод ${payment_id} отменен`, status: "ok" });
});

export const resetPayment = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;

  const payment = await PaymentService.reset(payment_id);

  if (payment.status === "error") {
    return res.status(400).json(payment);
  }
  return res.status(200).json({
    massage: `Платеж ${payment_id} сброшен в статус ${paymentStatus.pending}`,
    status: "ok",
  });
});

export const getAllPayments = asyncHandler(async (req, res) => {
  const resp = await PaymentService.getAll();
  return res.status(200).json(resp);
});

export const getPendingPayments = asyncHandler(async (req, res) => {
  const resp = await PaymentService.getPending();
  return res.status(200).json(resp);
});

export const getCompletedPayments = asyncHandler(async (req, res) => {
  const resp = await PaymentService.getPaymentCompleted();
  return res.status(200).json(resp);
});

export const getPayment = asyncHandler(async (req, res) => {
  const { payment_id } = req.params;
  const resp = await PaymentService.getPaymentById(payment_id);
  return res.status(200).json(resp);
});

export const getUserByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const user = await UserServices.findByEmail(email);
  if (user) {
    const resp = {
      email: user.email,
      start_account: user.wallets.start_account,
      avangard: user.metaData.avangard_id,
      password: user.password,
    };
    return res.send(resp);
  }
  return res.status(404).send("bed");
});

export const editUserByEmail = asyncHandler(async (req, res) => {
  const { email, ...data } = req.body;
  const user = await UserServices.editUserByEmail(email, data);
  if (user) {
    const resp = {
      email: user.email,
      start_account: user.wallets.start_account,
      avangard: user.metaData.avangard_id,
      password: user.password,
    };
    return res.send(resp);
  }
  return res.send("bed");
});

export const editUserStartAccountByEmail = asyncHandler(async (req, res) => {
  const { email, amount } = req.body;
  const resp = await UserServices.editUserStartAccountByEmail(email, amount);
  return res.json(resp);
});

export const getSettings = asyncHandler(async (req, res) => {
  const totalInvestments = await SettingServices.getTotalInvestments();
  const totalUsers = await SettingServices.getTotalUsers();
  const bills = await BillsService.getAllBillsLean();
  const { dailyInterest, autoDailyInterest } = await ConfigService.getConfig();
  return res.json({
    ...totalInvestments,
    ...totalUsers,
    bills,
    dailyInterest: (dailyInterest * 100).toFixed(1),
    autoDailyInterest,
  });
});

export const changeMrxPercent = asyncHandler(async (req, res) => {
  const { dailyInterest, autoDailyInterest } = req.body;
  console.log(req.body);
  const resp = await ConfigService.changeMrxPercent(
    dailyInterest,
    autoDailyInterest
  );
  return res.send(resp);
});

export const editBillById = asyncHandler(async (req, res) => {
  const { _id, ...data } = req.body;
  const resp = await BillsService.editBill(_id, data);
  return res.send(resp);
});

export const createQiwi = asyncHandler(async (req, res) => {
  const { requisites } = req.body;
  const data = {
    requisites,
    maximum_wallet_amount: 500000,
    type_wallet: walletType.qiwi,
  };
  const resp = await BillsService.addBill(data);
  return res.send(resp);
});

export const deleteBillByid = asyncHandler(async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const resp = await BillsService.deleteBill(id);
  return res.send(resp);
});

export const findAvangard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const avangards = await UserServices.getUserAvangardInfo(id);
  return res.send(
    avangards ? avangards : { message: "user not found", status: "error" }
  );
});
