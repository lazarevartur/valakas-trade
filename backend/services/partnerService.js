import mongoose from "mongoose";
import User from "../models/userModel.js";

export const getPartnet = async (userId, cb = () => null, selectQuery = "") => {
  if (!mongoose.isValidObjectId(userId)) {
    throw new Error("Партнер не найден");
  }
  let partner;

  try {
    partner = await User.findById(userId)
      .select(selectQuery)
      .populate({
        path: "Inviting_id",
        select: selectQuery,
      })
      .select(selectQuery);
  } catch (error) {
    console.log("Больше нет партнеров");
  }
  const firstLine = partner ? partner.Inviting_id : null;

  if (firstLine) {
    cb(firstLine);
  } else {
    return null;
  }
  firstLine.save();
  return {
    _id: firstLine._id,
    additional_lines: firstLine.configUser.additional_lines,
  };
};

export const addProfitPartnerForWeek = async () => {};

// export const getPartnet = async (userId, cb = () => null, selectQuery = "") => {
//   if (!mongoose.isValidObjectId(userId)) {
//     throw new Error("Партнер не найден");
//   }
//   let partner;
//   try {
//     partner = await User.findById(userId)
//       .select(selectQuery)
//       .populate({
//         path: "Inviting_id",
//         select: selectQuery,
//       })
//       .select(selectQuery);
//   } catch (error) {
//     console.log("Больше нет партнеров");
//   }
//
//   const firstLine = partner ? partner.Inviting_id : null;
//
//   if (firstLine) {
//     cb(firstLine);
//   } else {
//     return null;
//   }
//   firstLine.save();
//   return {
//     _id: firstLine._id,
//     additional_lines: firstLine.configUser.additional_lines,
//   };
// };
