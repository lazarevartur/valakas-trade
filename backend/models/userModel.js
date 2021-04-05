import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      //TODO УБРАТЬ КОМЕНТАРИЙ
      //unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    country: {
      type: String,
    },
    invitingId: {
      type: String,
    },
    referralLink: {
      type: String,
    },
    referralLinkCounter: {
      type: Number,
    },
    friends: {
      firsLine: [{ id: mongoose.Schema.Types.ObjectId }],
      secondLine: [{ id: mongoose.Schema.Types.ObjectId }],
      thirdLine: [{ id: mongoose.Schema.Types.ObjectId }],
    },
    deposit: {
      type: Number,
      default: 0,
    },
    incomeFromPartners: {
      depositIncome: {
        type: Number,
        default: 0,
      },
      dividendIncome: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);
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
