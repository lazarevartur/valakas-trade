import asyncHandler from "express-async-handler";
import mrxPrograms from "../models/programModel.js";
import optionalProgram from "../models/optionalProgramModel.js";
import User from "../models/userModel.js";
import priorityPrograms from "../models/priorityProgramModel.js";

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

export const getAvailableMrxPrograms = asyncHandler(async (req, res) => {
  const userId = req.user;
  let allPrograms;
  let user;
  try {
    allPrograms = await mrxPrograms.find({});
    user = await User.findById(userId);
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }
  const priceWithId = transformArr(allPrograms);
  const biggetstPrice = findBiggestPriceInArray(user.programs.mrx, priceWithId);
  const availablePrice = avaibleMrxProgram(allPrograms, biggetstPrice);
  console.log(biggetstPrice);

  return res.json(availablePrice);
});

export const getMrxProgram = asyncHandler(async (req, res) => {
  const programId = req.body.program_id;
  let program;
  try {
    program = await mrxPrograms.findById(programId);
    if (!program) {
      return res.status(404).json({
        message: "Программа не найдена",
      });
    }
  } catch (e) {
    return res.status(500).json({ message: "Попробуйте позже" });
  }
  return res.json(program);
});

export const getOptionalPrograms = asyncHandler(async (req, res) => {
  let allPrograms;

  try {
    allPrograms = await optionalProgram.find({});
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }

  return res.json(allPrograms);
});

export const getActiveOptionalProgram = asyncHandler(async (req, res) => {
  let activeProgram;
  try {
    [activeProgram] = await optionalProgram.find({ status: "active" });
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }
  if (!activeProgram) {
    return res.json({ message: "Нету активных опционов" });
  }
  return res.json(activeProgram);
});

export const getPurchasedOptions = asyncHandler(async (req, res) => {
  const userId = req.user;
  let user;

  try {
    user = await User.findById(userId).select("programs.optional");
    const resp = user.programs.optional;
    return res.status(200).json(resp);
  } catch (e) {
    console.log(e);
    return res.status(404).json({ message: "пользватель не найден" });
  }
});

export const getPriorityPrograms = asyncHandler(async (req, res) => {
  let allPrograms;

  try {
    allPrograms = await priorityPrograms.find({});
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }

  return res.json(allPrograms);
});

export const getPriorityProgramByName = asyncHandler(async (req, res) => {
  const name = req.params.name;
  let program;

  try {
    [program] = await priorityPrograms.find({ name });
    if (!program) {
      return res.status(404).json({
        message: "Программа не найдена",
      });
    }
  } catch (e) {
    return res.status(500).json({ message: "Попробуйте позже" });
  }

  return res.json(program);
});

export const getPurchasedPriorityPrograms = asyncHandler(async (req, res) => {
  console.log("==========getActivePriorityPrograms===========");
  const userId = req.user;
  let userAllPriority;
  try {
    userAllPriority = await User.findById(userId).select("programs.priority");
    const resp = userAllPriority.programs.priority;
    return res.status(200).json(resp);
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }
});

function findBiggestPriceInArray(arr, map) {
  let bigPrice = 0;
  arr.forEach((item) => {
    bigPrice = map[item.program] > bigPrice ? map[item.program] : bigPrice;
  });
  return bigPrice;
}
function transformArr(arr) {
  const map = {};
  arr.forEach((item) => {
    map[item._id] = item.price;
  });
  return map;
}
function avaibleMrxProgram(arr, price) {
  return arr.filter((item) => {
    return item.price > price;
  });
}
