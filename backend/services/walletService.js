import User from "../models/userModel.js";
import { normalNumber } from "../utils/utils.js";

export class walletService {
  static repleWallet = async (userId, amount) => {
    let user;
    try {
      user = await User.findById(userId).select(
        "total_investment wallets.start_account"
      );
    } catch (e) {
      return { message: "User not found", status: "error" };
    }
    user.wallets.start_account += Number(amount);
    user.total_investment += Number(amount);
    user.save();

    return {
      message: `Успешное пополнение на сумму ${amount}`,
      status: "ok",
    };
  };

  static transfer = async ({ user_id, amount, walletType }) => {
    let user;
    try {
      user = await User.findById(user_id);
      if (!user.wallets.hasOwnProperty(walletType)) {
        return {
          message: "Неверный тип кошелька",
          status: "error",
        };
      }
      console.log(normalNumber(amount));
      if (amount > user.wallets[walletType] || !normalNumber(amount)) {
        return {
          message: "Недостаточно средств для перевода",
          status: "error",
        };
      }
      user.wallets.start_account += amount;
      user.wallets[walletType] -= amount;
      user.save();
      return {
        message: `Перевод на сумму ${amount} успешен`,
        status: "ok",
      };
    } catch (e) {
      //console.log(e);
      return { message: "User not found", status: "error" };
    }
  };

  static withdrawal = async ({ user_id, amount, requisites }) => {
    let user;
    if (!requisites) {
      return { message: "Укажите реквезиты", status: "error" };
    }
    try {
      user = await User.findById(user_id);
      if (amount > user.wallets.start_account || !normalNumber(amount)) {
        return {
          message: "Недостаточно средств для перевода",
          status: "error",
        };
      }
      user.wallets.start_account -= amount;
      user.save();
      return {
        message: `Вывод средств на сумму ${amount} успешен`,
        status: "ok",
      };
    } catch (e) {
      //console.log(e);
      return { message: "User not found", status: "error" };
    }
  };

  static getStartAccountAmount = async (user_id) => {
    let user;
    try {
      user = await User.findById(user_id).select("wallets.start_account");
      return user.wallets.start_account;
    } catch (e) {
      return res.status(400).json({
        message: "user not found",
        status: "error",
      });
    }
  };

  static reduceStartAccount = async (user_id, amount) => {
    let user;
    try {
      user = await User.findById(user_id).select("wallets.start_account");
    } catch (e) {
      return res.status(400).json({
        message: "user not found",
        status: "error",
      });
    }
    user.wallets.start_account -= amount;
    user.save();
    return {
      message: "Операция успешная",
      start_account: user.wallets.start_account,
      status: "ok",
    };
  };

  static increaseStartAccount = async (user_id, amount) => {
    let user;
    try {
      user = await User.findById(user_id).select("wallets.start_account");
    } catch (e) {
      return res.status(400).json({
        message: "user not found",
        status: "error",
      });
    }
    user.wallets.start_account += amount;
    user.save();
    return {
      message: "Операция успешная",
      start_account: user.wallets.start_account,
      status: "ok",
    };
  };
}
