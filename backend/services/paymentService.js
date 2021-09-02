import PaymentModel from "../models/paymentModel.js";
import mongoose from "mongoose";
import { walletType } from "../config/walletType.js";
import { isValidWalletType, validatePaymentData } from "../utils/utils.js";
import { paymentStatus } from "../config/paymentStatus.js";
import { actionTypeWallet } from "../config/actionTypeWallet.js";

export class PaymentService {
  static create = async (payment_data) => {
    const { amount, from_where_payment, user_id } = payment_data;
    const errors = validatePaymentData(amount, from_where_payment, user_id);

    if (errors.length) {
      throw errors;
    }

    try {
      return await PaymentModel.create(payment_data);
    } catch (e) {
      console.log(e);
      return { message: "Error createPayment", status: "error" };
    }
  };

  static getAll = async () => {
    let payments;
    try {
      payments = await PaymentModel.find({});
    } catch (e) {
      console.log(e);
      return { message: "Платежи не найдены", status: "error" };
    }
    return payments;
  };

  static getPending = async () => {
    let payments;
    try {
      payments = await PaymentModel.find({ status: paymentStatus.pending });
    } catch (e) {
      console.log(e);
      return { message: "Платежи не найдены", status: "error" };
    }
    return payments;
  };

  static getPaymentCompleted = async () => {
    let payments;

    try {
      payments = await PaymentModel.find({
        status: [paymentStatus.rejected, paymentStatus.success],
      });
      return payments;
    } catch (e) {
      //console.log(e);
      return { message: "user not found", status: "error" };
    }
  };

  static getPaymentById = async (payment_id) => {
    let payment;
    try {
      payment = await PaymentModel.findById(payment_id);
    } catch (e) {
      console.log(e);
      return { message: "Платеж не найдены", status: "error" };
    }
    return payment;
  };

  static getUserPaymentPendingByUserId = async (user_id) => {
    let userPayments;

    try {
      userPayments = await PaymentModel.find({
        user_id,
        status: paymentStatus.pending,
      }).sort({ createdAt: -1 });
      return userPayments;
    } catch (e) {
      //console.log(e);
      return { message: "user not found", status: "error" };
    }
  };

  static getUserPaymentSuccessByUserId = async (user_id) => {
    let userPayments;

    try {
      userPayments = await PaymentModel.find({
        user_id,
        status: paymentStatus.success,
      });
      return userPayments;
    } catch (e) {
      //console.log(e);
      return { message: "user not found", status: "error" };
    }
  };

  static getUserPaymentRejectedByUserId = async (user_id) => {
    let userPayments;

    try {
      userPayments = await PaymentModel.find({
        user_id,
        status: paymentStatus.rejected,
      });
      return userPayments;
    } catch (e) {
      //console.log(e);
      return { message: "user not found", status: "error" };
    }
  };

  static getUserPaymentCompletedByUserId = async (user_id) => {
    let userPayments;

    try {
      userPayments = await PaymentModel.find({
        user_id,
        status: [paymentStatus.rejected, paymentStatus.success],
      });
      return userPayments;
    } catch (e) {
      //console.log(e);
      return { message: "user not found", status: "error" };
    }
  };

  static success = async (payment_id) => {
    let payment;
    try {
      payment = await PaymentModel.findById(payment_id);
    } catch (e) {
      return { message: "Payment not found", status: "error" };
    }
    if (payment.status === paymentStatus.success) {
      return { message: "payment has already been confirmed", status: "error" };
    }
    if (
      payment.action_type_wallet === actionTypeWallet.replenishment ||
      actionTypeWallet.withdrawal
    ) {
      payment.status = paymentStatus.success;
      payment.confirmation_date = Date.now();
      payment.save();
      return payment;
    }
    return { message: "Payment not found", status: "error" };
  };

  static rejected = async (payment_id) => {
    let payment;
    try {
      payment = await PaymentModel.findById(payment_id);
    } catch (e) {
      //console.log(e);
      return { message: "Payment not found", status: "error" };
    }
    if (payment.status === paymentStatus.success) {
      return {
        message: "Confirmed payment cannot be canceled",
        status: "error",
      };
    }
    payment.confirmation_date = Date.now();
    payment.status = paymentStatus.rejected;
    payment.save();
    return payment;
  };

  static reset = async (payment_id) => {
    let payment;
    try {
      payment = await PaymentModel.findById(payment_id);
    } catch (e) {
      return { message: "Payment not found", status: "error" };
    }
    console.log(payment);
    if (payment && payment.status === paymentStatus.success) {
      return {
        message: "Confirmed payment cannot be canceled",
        status: "error",
      };
    }

    payment.status = paymentStatus.pending;
    payment.confirmation_date = "";
    payment.save();
    return payment;
  };
}
