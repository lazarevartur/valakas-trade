import asyncHandler from "express-async-handler";
import mrxPrograms from "../models/programModel.js";

//export const exemple = asyncHandler(async (req, res) => {});
export const getMrxPrograms = asyncHandler(async (req, res) => {
  let allPrograms;
  try {
    allPrograms = await mrxPrograms.find({});
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }
  return res.json(allPrograms);
});
