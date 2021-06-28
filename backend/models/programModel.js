import mongoose from "mongoose";

const mrxProgramsModel = mongoose.Schema(
  {
    name: { type: String },
    linear_premium: { type: Number, default: 4 },
    validity: { type: Number },
    premium: { type: Number, default: 0.2 },
    line_count: { type: Number, default: 3 },
    price: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const mrxPrograms = mongoose.model("mrxPrograms", mrxProgramsModel);

export default mrxPrograms;
