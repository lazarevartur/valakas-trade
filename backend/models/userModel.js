import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import mrxPrograms from "./programModel.js";
import optionalProgram from "./optionalProgramModel.js";

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
    status: { type: String, default: "М1" },
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
    },
    programs: {
      mrx: [
        {
          _id: false,
          start_time: {
            type: Date,
            default: Date.now(),
          },
          ending_time: {
            type: Date,
            required: true,
          },
          program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "mrxPrograms",
          },
        },
      ],
      //Количество, ценна, доходность, раунд
      optional: [
        {
          _id: false,
          program: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "optionalPrograms",
          },
          quantity: { type: Number, default: 0 },
          cost: { type: Number, default: 0 },
          round_number: { type: Number, default: 0 },
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
      WhatsApp: {
        type: String,
        default: "",
      },
      other: {
        type: String,
        default: "",
      },
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
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(mongooseLeanVirtuals);

userSchema.virtual("count_line").get(function () {
  return Object.keys(this.partners).length;
});
userSchema.virtual("current_optional_program").get(async function () {
  let activeOptional;
  try {
    [activeOptional] = await optionalProgram.find({ status: "active" }).lean();
  } catch (e) {
    console.log(e);
    return { message: "ошибка сервера" };
  }
  if (!activeOptional) {
    return { message: "нету активной программы" };
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
  if (week <= 7) {
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
