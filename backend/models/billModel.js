import mongoose from "mongoose";

const billSchema = mongoose.Schema(
  {
    maximum_wallet_amount: { type: Number },
    current_amount: { type: Number, default: 0 },
    type_wallet: {
      type: String,
      enum: [
        "qiwi",
        "payeer",
        "bitcoin",
        "ethereum",
        "usdtether",
        "perfect_money",
      ],
      required: true,
    },
    requisites: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BillsModel = mongoose.model("bills", billSchema);

export default BillsModel;
