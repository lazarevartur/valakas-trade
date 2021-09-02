import jwt from "jsonwebtoken";
import { walletType } from "../config/walletType.js";
import mongoose from "mongoose";

export const generateToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const getDayinMm = (day) => 24 * 60 * 60 * 1000 * day;

export const isValidWalletType = (from_where_payment) => {
  return !!walletType[from_where_payment];
};

export const normalNumber = (number) => {
  number = +number;
  return !(number < 0);
};

export const makeCounter = () => {
  let currentCounter = 1;
  return () => {
    return currentCounter++;
  };
};

export const validatePaymentData = (amount, from_where_payment, user_id) => {
  const errors = [];

  amount = +amount;
  if (amount < 0 || !Number.isInteger(amount)) {
    errors.push({
      type: "amount",
      message: "amount required number and positive",
    });
  }

  if (!mongoose.isValidObjectId(user_id)) {
    errors.push({
      type: "user_id",
      message: "user_id not found",
    });
  }

  if (!isValidWalletType(from_where_payment)) {
    errors.push({
      type: "from_where_payment",
      message: "unknown payment system",
    });
  }

  return errors;
};

export const randomInRange = (min, max) => {
  return Math.random() < 0.5
    ? (1 - Math.random()) * (max - min) + min
    : Math.random() * (max - min) + min;
};
export function isDev(cb) {
  if (process.env.NODE_ENV === "dev") {
    cb();
    return true;
  }
  return false;
}
