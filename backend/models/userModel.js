import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import mrxPrograms from "./programModel.js";
import optionalProgram from "./optionalProgramModel.js";
import { roles } from "../config/role.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      country: "",
    },
    status: {
      type: String,
      enum: ["M1", "M2", "M3", "M4", "M5"],
      default: "M1",
    },
    Inviting_id: {
      type: String,
      default: "",
    },
    Inviting_avangard_id: {
      type: String,
      default: "",
    },
    referral_link: {
      type: String,
      default: "",
    },
    referral_link_counter: {
      type: Number,
      default: 0,
    },
    partners: {
      first: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      second: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      third: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      fourth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      fifth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      sixth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      seventh: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      eighth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      ninth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      tenth: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    programs: {
      mrx: {
        start_time: {
          type: Date,
        },
        ending_time: {
          type: Date,
        },
        validity: { type: Number },
        price: { type: Number },

        program: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "mrxPrograms",
        },
      },
      //Количество, ценна, доходность, раунд
      optional: [
        {
          _id: false,
          program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "optionalPrograms",
          },
          cost: { type: Number, default: 0 },
          quantity: { type: Number, default: 0 },
          round_number: { type: Number, default: 0 },
          profitability: { type: Number, default: 0 },
        },
      ],
      priority: [
        {
          amount: { type: Number },
          conditions: {
            discount: { type: Number },
            insurance: { type: Number },
            term: { type: Number },
          },
          dateCompletion: { type: Number },
          originalAmount: { type: Number },
          marketingAssistance: { type: Boolean },
          programType: { type: String },
        },
      ],
    },
    wallets: {
      //Депозит
      start_account: { type: Number, default: 0 },
      // Деньги на вывод
      bonus_account: {
        type: Number,
        default: 0,
      },
      // Операционный счет
      operating_account: {
        type: Number,
        default: 0,
      },
    },
    programs_wallets: {
      mrx: { type: Number, default: 0 },
      options: { type: Number, default: 0 },
      priority: { type: Number, default: 0 },
    },
    total_investment: {
      type: Number,
      default: 0,
    },
    referral_income_of_partners: {
      type: Number,
      default: 0,
    },
    configUser: {
      additional_lines: { type: Boolean, default: false },
      linear_premium: {
        firstLine: { type: Number, default: 0.04 },
        sekondLine: { type: Number, default: 0.03 },
        thirddLine: { type: Number, default: 0.02 },
        fourthdLine: { type: Number, default: 0.01 },
      },
      img: { type: String },
      sms_notifications: {
        type: Boolean,
        default: false,
      },
      verification: {
        type: Boolean,
        default: false,
      },
    },
    metaData: {
      partners: {
        first: {
          type: Number,
          default: 0,
        },
        second: {
          type: Number,
          default: 0,
        },
        third: {
          type: Number,
          default: 0,
        },
        fourth: {
          type: Number,
          default: 0,
        },
      },
      partners_profit_for_week: {
        first: {
          type: [Number],
        },
        second: {
          type: [Number],
        },

        third: {
          type: [Number],
        },

        fourth: {
          type: [Number],
        },
      },
      profit_investment_for_week: [{ type: Number }],
      profit_referral_program_for_week: [{ type: Number }],
      linear_premium: {
        type: Number,
        default: 0,
      },
      linear_premium_option: {
        type: Number,
        default: 0,
      },
      linear_premium_priority: {
        type: Number,
        default: 0,
      },
      dividends: {
        type: Number,
        default: 0,
      },
      investment_package: {
        type: Number,
        default: 0,
      },
      options: {
        type: Number,
        default: 0,
      },
      mentor_prime: {
        type: Number,
        default: 0,
      },
      avangard_id: {
        type: String,
        default: "",
      },
    },
    contact_details: {
      name: {
        type: String,
        default: "",
      },
      middle_name: {
        type: String,
        default: "",
      },
      surname: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        default: "",
      },
      phone_number: { type: String, default: "" },
      telegram: {
        type: String,
        default: "",
      },
      whatsApp: {
        type: String,
        default: "",
      },
      avatarImg: { type: String, default: "" },
    },
    deposit_account: {
      type: Number,
      virtual: true,
      get() {
        return Number(
          this.programs_wallets.mrx + this.programs_wallets.options
        );
      },
    },
    access: { type: Number, default: roles.user },
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(mongooseLeanVirtuals);

userSchema.virtual("count_line").get(function () {
  return Object.keys(this.partners).length;
});

userSchema.virtual("is_buy_program").get(function () {
  return !!(this.programs_wallets.mrx || this.programs_wallets.options);
});

userSchema.virtual("personal_team_turnover").get(async function () {
  let user;
  user = await User.findById(this._id)
    .select("partners")
    .populate(`partners.first partners.second partners.third partners.fourth`)
    .lean();
  const objToArr = Object.entries(user.partners);
  return objToArr.reduce((acc, [lineName, partners]) => {
    partners.forEach((partner) => {
      if (!partner) {
        return 0;
      }
      let totalSum = 0;
      Object.values(partner.programs_wallets).forEach((value) => {
        totalSum += value;
      });
      acc += totalSum;
    });
    return acc;
  }, 0);
});

userSchema.virtual("current_optional_program").get(async function () {
  let activeOptional;

  try {
    [activeOptional] = await optionalProgram.find({ status: "active" }).lean();
  } catch (e) {
    console.log(e);
    return void 0;
  }
  if (!activeOptional) {
    return void 0;
  }
  return this.programs.optional.find((item) => {
    //return activeOptional._id.equals(item.program) ? item : null;

    return String(activeOptional._id) === String(item.program);
  });
});

userSchema.virtual("active_mrx_program").get(async function () {
  let maxProgram = { _id: "", price: 0 };
  for (const item of this.programs.mrx) {
    const mrx = await mrxPrograms.findById(item.program);

    maxProgram =
      maxProgram.price < mrx.price
        ? {
            _id: mrx._id,
            price: mrx.price,
            start_time: item.start_time,
            ending_time: item.ending_time,
          }
        : maxProgram;
  }

  return maxProgram;
});

userSchema.virtual("income_partner_for_week").get(function () {
  const [initMongo, ...list] = Object.entries(
    this.metaData.partners_profit_for_week
  );
  const week = list[0][1].length;
  if (week <= 6) {
    return [];
  }

  return list.reduce((acc, [nameLine, arraySum]) => {
    let totalSum = 0;
    arraySum.some((sum, i) => {
      if (i > 6) {
        return false;
      }
      totalSum += sum;
    });
    acc.push([nameLine, totalSum]);
    return acc;
  }, []);
});

userSchema.virtual("income_investment_for_week").get(function () {
  const profitForWeek = this.metaData.profit_investment_for_week;
  const week = profitForWeek.length;
  if (week <= 6) {
    return 0;
  }

  return profitForWeek.reduce((acc, value, i) => {
    if (i < 7) {
      acc += value;
    }
    return acc;
  }, 0);
});

userSchema.virtual("income_referral_program_for_week").get(function () {
  const profitForWeek = this.metaData.profit_referral_program_for_week;
  const week = profitForWeek.length;
  if (week <= 6) {
    return 0;
  }

  return profitForWeek.reduce((acc, value, i) => {
    if (i < 7) {
      acc += value;
    }
    return acc;
  }, 0);
});

userSchema.virtual("quantity_for_each_line").get(function () {
  const partnerLineList = Object.entries(this.partners);
  const [initMongo, ...list] = partnerLineList;
  return list.reduce((acc, item) => {
    acc.push(item[1].length);
    return acc;
  }, []);
});

userSchema.virtual("total_number_partners").get(function () {
  const partnerLineList = Object.entries(this.partners);
  const [initMongo, ...list] = partnerLineList;
  return list.reduce((acc, item) => {
    return acc + item[1].length;
  }, 0);
});

userSchema.virtual("total_earned").get(function () {
  if (this.wallets) {
    return this.wallets.bonus_account + this.wallets.operating_account;
  }
  return 0;
});

userSchema.virtual("total_earned_all_time").get(function () {
  let total_earned_all_time = 0;
  total_earned_all_time =
    this.metaData.investment_package +
    this.metaData.dividends +
    this.metaData.linear_premium +
    this.metaData.mentor_prime;
  return total_earned_all_time;
});

userSchema.methods.matchPassword = async function (plainPassword) {
  //TODO УБРАТЬ КОМЕНТАРИЙ

  // return await bcrypt.compare(plainPassword, this.password);
  return plainPassword === this.password;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  //TODO Убрать коментарий
  //this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
