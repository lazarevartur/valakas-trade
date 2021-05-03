import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const refSchema = mongoose.Schema(
  {
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Referrals = mongoose.model("Referrals", refSchema);

export default Referrals;
