import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const paymentSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: { type: String, default: "" },
    amount: {
      type: Number,
      default: 0,
      required: true,
    },
    status: {
      type: String,
      enum: ["success", "pending", "rejected"],
      default: "pending",
    },
    from_where_payment: {
      type: String,
      enum: [
        "visa_mast_mir",
        "qiwi",
        "payeer",
        "bitcoin",
        "ethereum",
        "usdtether",
        "usdtether",
        `perfect_money`,
      ],
      required: true,
    },
    action_type_wallet: {
      type: String,
      enum: ["replenishment", "withdrawal", "internal_transfer"],
      required: true,
    },
    requisites: { type: String },
    bill: { type: String },
    confirmation_date: { type: Date },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PaymentModel = mongoose.model("Payments", paymentSchema);

export default PaymentModel;
