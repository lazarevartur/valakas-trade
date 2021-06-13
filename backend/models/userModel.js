import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";

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
    status: { type: String, default: "Новичек" },
    Inviting_id: {
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
            ref: "Programs",
          },
        },
      ],
    },
    wallets: {
      bonus_account: {
        type: Number,
        default: 0,
      },
      operating_account: {
        type: Number,
        default: 0,
      },
    },
    programs_walets: {
      mrx: { type: Number, default: 0 },
      options: { type: Number, default: 0 },
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
    },
    сontact_details: {
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
        return Number(this.programs_walets.mrx + this.programs_walets.options);
      },
    },
  },
  {
    timestamps: true,
  }
);
userSchema.virtual("count_line").get(function () {
  return Object.keys(this.partners).length;
});

userSchema.plugin(mongooseLeanVirtuals);

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
