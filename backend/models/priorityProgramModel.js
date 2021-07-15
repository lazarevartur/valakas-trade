import mongoose from "mongoose";

const priorityProgramModel = mongoose.Schema(
  {
    name: { type: String },
    type: { type: String },
    description: { type: String },
    icon: { type: String },
    img: { type: String },
    conditions: {
      discount: [{ type: Number, _id: false }],
      term: [{ type: Number, _id: false }],
      minCost: { type: Number, default: 0 },
      maxCost: { type: Number, default: 0 },
      minStatus: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const priorityPrograms = mongoose.model(
  "priorityPrograms",
  priorityProgramModel
);

export default priorityPrograms;
