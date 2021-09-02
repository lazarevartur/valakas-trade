import BillsModel from "../models/billModel.js";
import { walletType } from "../config/walletType.js";

export class BillsService {
  static getBillByName = async (type_wallet) => {
    let bill;
    type_wallet = type_wallet.toLowerCase();

    if (type_wallet === "qiwi") {
      bill = await this.getQiwiWallet();
    } else {
      try {
        bill = await BillsModel.findOne({ type_wallet }).lean();
      } catch (e) {
        return { message: "bill not found", status: "error" };
      }
    }
    return bill;
  };

  static getAllBill = async () => {
    let bills;
    const { qiwi, ...rest } = walletType;
    try {
      const arrWalletType = Object.keys(rest);
      bills = await BillsModel.find({ type_wallet: arrWalletType }).lean();
      const qiwi = await this.getQiwiWallet();
      bills = [...bills, qiwi];
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }
    return arrBillsToObj(bills);
  };

  static getAllBillsLean = async () => {
    let bills;
    try {
      const arrWalletType = Object.keys(walletType);
      bills = await BillsModel.find({ type_wallet: arrWalletType }).lean();
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }

    return arrBillsToObj(bills);
  };

  static getBillById = async (id) => {
    let bill;

    try {
      bill = await BillsModel.findById(id).lean();
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }
    return bill;
  };

  static addBill = async (data) => {
    let bill;

    try {
      bill = await BillsModel.create(data);
    } catch (e) {
      console.log(e);
      return { message: "error create bill", status: "error" };
    }
    return bill;
  };

  static editBill = async (id, data) => {
    let bill;
    if (!data.requisites) {
      delete data.requisites;
    }
    if (!data.current_amount) {
      delete data.current_amount;
    }
    try {
      bill = await BillsModel.findByIdAndUpdate(id, data, { new: true });
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }
    return bill;
  };

  static editBillByRequisites = async (requisites, amount) => {
    let bill;

    try {
      [bill] = await BillsModel.find({ requisites });
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }
    bill.current_amount += amount;
    return bill.save();
  };

  static deleteBill = async (id) => {
    let bill;

    try {
      bill = await BillsModel.findByIdAndDelete(id);
    } catch (e) {
      return { message: "bill not found", status: "error" };
    }
    return bill;
  };

  static addMoneyById = async (id, amount) => {
    const bill = await this.getBillById(id);
    if (bill.status === "error") {
      return bill;
    }
    bill.current_amount += amount;
    return bill.save();
  };

  static getQiwiWallet = async () => {
    let qiwiWallets;
    try {
      qiwiWallets = await BillsModel.find({
        type_wallet: walletType.qiwi,
      }).lean();
    } catch (e) {
      return { message: "bills not found", status: "error" };
    }
    return getActiveQiwi(qiwiWallets);
  };
}

function getActiveQiwi(qiwi) {
  const desk = qiwi.sort((a, b) => {
    return a.current_amount - b.current_amount;
  });
  return desk[0];
}

function arrBillsToObj(arr) {
  return arr.reduce((acc, obj) => {
    if (acc[obj.type_wallet]) {
      acc[obj.type_wallet] = Array.isArray(acc[obj.type_wallet])
        ? (acc[obj.type_wallet] = [...acc[obj.type_wallet], obj])
        : [acc[obj.type_wallet], obj];
    } else {
      acc[obj.type_wallet] = obj;
    }

    return acc;
  }, {});
}
