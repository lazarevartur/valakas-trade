import mongoose from "mongoose";

const configSchema = mongoose.Schema(
  {
    days: { type: Number, default: 0 },
    dailyInterest: { type: Number, default: 0.02 },
    autoDailyInterest: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const ConfigModel = mongoose.model("Configs", configSchema);

export default ConfigModel;
