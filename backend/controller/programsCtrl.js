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
  const ask = allPrograms.sort(aksSortMrx)
  return res.json(ask);
});

export const getAvailableMrxPrograms = asyncHandler(async (req, res) => {
  const userId = req.user;
  let allPrograms;
  let user;
  try {
    allPrograms = await mrxPrograms.find({}).lean();
    user = await User.findById(userId);
  } catch (e) {
    console.log(e);
    return res.send("Programs not found");
  }
  const {price = 0} = user.programs.mrx
  const availablePrograms = allPrograms.filter((item) => {
    return item.price > price
  }).map((item) => {
  const diffPrice = item.price - price
    return {...item, price: diffPrice}
  })
  const ask = availablePrograms.sort(aksSortMrx)


  return res.json(ask);
});

export const getMrxProgram = asyncHandler(async (req, res) => {
  const programId = req.body.program_id;
  console.log(programId)
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

  const ask = allPrograms.sort(aksSortOptional)
  return res.json(ask);
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

  const ask = allPrograms.sort(aksSortPriority)

  return res.json(ask);
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

function aksSortOptional (a ,b) {
  return a.round_number - b.round_number
}
function aksSortMrx (a ,b) {
  return a.price - b.price
}
function aksSortPriority (a ,b) {
  return a.createdAt - b.createdAt
}