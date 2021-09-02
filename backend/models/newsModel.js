import mongoose from "mongoose";

const newsSchema = mongoose.Schema(
  {
    img_url: { type: String },
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const NewsModel = mongoose.model("news", newsSchema);

export default NewsModel;
