import User from "../models/userModel.js";
import { normalNumber } from "../utils/utils.js";
import { mentor } from "../config/mentorStatus.js";

export class UserServices {
  static getAllUsers = async (query, populate) => {
    let users;
    try {
      users = await User.find({}).select(query).populate(populate);
    } catch (e) {
      return { message: "users not found", status: "error" };
    }

    return users;
  };

  static getAllUsersLean = async (query, populate) => {
    let users;
    try {
      users = await User.find({}).select(query).populate(populate).lean();
    } catch (e) {
      return { message: "users not found", status: "error" };
    }

    return users;
  };

  static getUserAvangardInfo = async (id) => {
    const mainAvangard = await this.findMainAvangardLean(
      id,
      "email metaData.avangard_id"
    );

    if (mainAvangard) {
      const avangardUsers = await UserServices.findAvangardsLean(
        mainAvangard.metaData.avangard_id,
        "email wallets.start_account"
      );
      if (avangardUsers.length) {
        const totalDeposit = avangardUsers.reduce((acc, user) => {
          acc += user.wallets.start_account;
          return acc;
        }, 0);
        return {
          totalDeposit,
          totalUsers: avangardUsers.length,
          email: mainAvangard.email,
        };
      }
    }

    return void 0;
  };

  static findByEmail = async (email, query, populate) => {
    let user;
    try {
      [user] = await User.find({ email }).select(query).populate(populate);
    } catch (e) {
      return { message: "user not found", status: "error" };
    }

    return user;
  };

  static findById = async (id, query, populate) => {
    let user;
    try {
      user = await User.findById(id).select(query).populate(populate);
    } catch (e) {
      return { message: "user not found", status: "error" };
    }

    return user ? user : { message: "user not found", status: "ok" };
  };

  static findAvangardsLean = async (id, query, populate) => {
    let user;
    try {
      user = await User.find({ Inviting_avangard_id: id })
        .select(query)
        .populate(populate)
        .lean();
    } catch (e) {
      return { message: "user not found", status: "error" };
    }

    return user ? user : { message: "user not found", status: "ok" };
  };

  static findMainAvangardLean = async (id, query, populate) => {
    let user;
    try {
      [user] = await User.find({ "metaData.avangard_id": id })
        .select(query)
        .populate(populate)
        .lean();
    } catch (e) {
      return { message: "user not found", status: "error" };
    }

    return user;
  };

  static findByIdLean = async (id, query, populate) => {
    let user;
    try {
      user = await User.findById(id).select(query).populate(populate).lean();
    } catch (e) {
      return { message: "user not found", status: "error" };
    }

    return user ? user : { message: "user not found", status: "ok" };
  };

  static editUserByEmail = async (email, data) => {
    const { avangard, password, start_account } = data;
    try {
      return User.findOneAndUpdate(
        { email },
        {
          "wallets.start_account": start_account,
          "metaData.avangard_id": avangard,
          password,
          total_investment: start_account,
        },
        { new: true }
      );
    } catch (e) {
      return e;
    }
  };

  static editUserStartAccountByEmail = async (email, amount) => {
    const userStartAccount = await this.findByEmail(
      email,
      "wallets.start_account"
    );
    if (userStartAccount.status) {
      return userStartAccount;
    }
    if (!normalNumber(amount)) {
      amount = userStartAccount.wallets.start_account;
    }
    userStartAccount.wallets.start_account = amount;
    userStartAccount.save();
    return userStartAccount;
  };

  static editUserStartAccountById = async (id, amount) => {
    const userStartAccount = await this.findById(id, "wallets.start_account");
    if (userStartAccount.status) {
      return userStartAccount;
    }
    if (!normalNumber(amount)) {
      amount = userStartAccount.wallets.start_account;
    }
    userStartAccount.wallets.start_account = amount;
    userStartAccount.save();
    return userStartAccount;
  };

  static editUserStatusMentor = async (id, status) => {
    const userStatusMentor = await this.findById(id, "status");
    if (userStatusMentor.status === "error") {
      return userStatusMentor;
    }
    userStatusMentor.status = status;
    userStatusMentor.save();
    return userStatusMentor;
  };

  static chekStatusPartner = async (id, findStatus) => {
    const partnerStatusMentor = await this.findByIdLean(id, `partners`, {
      path: "partners.first partners.second partners.third partners.fourth",
      select: "status -_id",
    });
    if (partnerStatusMentor.status === "error") {
      return partnerStatusMentor;
    }
    const { partners } = partnerStatusMentor;
    const partnersToArr = Object.values(partners);
    return !!partnersToArr.find((line) => {
      return line.find(({ status }) => {
        return status === findStatus;
      });
    });
  };

  static chekStatusPartner2 = async (user, findStatus) => {
    if (user.status === "error") {
      return user;
    }
    const { partners } = user;

    const partnersToArr = Object.values(partners);

    const [tr, ...rest] = partnersToArr;
    return !!rest.find((line) => {
      return line.find(({ status }) => {
        return status === findStatus;
      });
    });
  };

  static setNextStatusMentorLvl = async (user) => {
    const personal_team_turnover = await user.personal_team_turnover;
    const totalPartners = user.total_number_partners;
    const sMentor = user.status;
    const isM2 = this.chekStatusPartner2(user, mentor.m2.status);
    const isM3 = this.chekStatusPartner2(user, mentor.m3.status);
    const isM4 = this.chekStatusPartner2(user, mentor.m4.status);
    const profit = user.metaData.profit_referral_program_for_week;
    const profitLength = profit.length;
    switch (true) {
      case personal_team_turnover >= 7000 &&
        totalPartners >= 6 &&
        sMentor === mentor.m1.status:
        user.status = mentor.m2.status;
        user.wallets.bonus_account += mentor.m2.prime;
        user.metaData.mentor_prime += mentor.m2.prime;
        user.referral_income_of_partners += mentor.m2.prime;
        break;
      case personal_team_turnover >= 23000 &&
        totalPartners >= 20 &&
        isM2 &&
        sMentor === mentor.m2.status:
        user.status = mentor.m3.status;
        user.wallets.bonus_account += mentor.m3.prime;
        user.metaData.mentor_prime += mentor.m3.prime;
        user.referral_income_of_partners += mentor.m3.prime;
        break;
      case personal_team_turnover >= 48000 &&
        totalPartners >= 35 &&
        isM3 &&
        sMentor === mentor.m3.status:
        user.status = mentor.m4.status;
        user.configUser.additional_lines = true;
        user.wallets.bonus_account += mentor.m4.prime;
        user.metaData.mentor_prime += mentor.m4.prime;
        user.referral_income_of_partners += mentor.m4.prime;
        break;
      case personal_team_turnover >= 70000 &&
        totalPartners >= 50 &&
        isM4 &&
        sMentor === mentor.m4.status:
        user.status = mentor.m5.status;
        user.configUser.additional_lines = true;
        user.wallets.bonus_account += mentor.m5.prime;
        user.metaData.mentor_prime += mentor.m5.prime;
        user.referral_income_of_partners += mentor.m5.prime;
        break;
    }
    return user;
  };
}
