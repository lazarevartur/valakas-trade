import mongoose from "mongoose";

const optionalProgramModel = mongoose.Schema(
  {
    cost: { type: Number, default: 0.01 },
    quantity: { type: Number, default: 1 },
    profitability: { type: Number, default: 0.1 },
    purpose: { type: Number, default: 3 },
    collected: { type: Number, default: 0 },
    round_term: { type: Number, default: 28 },
    round_number: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["passed", "active", "future"],
      default: "future",
    },
    start_round: { type: Number, default: 0 },
    end_round: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const optionalPrograms = mongoose.model(
  "optionalPrograms",
  optionalProgramModel
);

export default optionalPrograms;
