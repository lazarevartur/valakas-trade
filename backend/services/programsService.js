import optionalProgram from "../models/optionalProgramModel.js";
import { optionalStatusEnum } from "../config/optionalStatus.js";

export const resetPrograms = async () => {
  let allOptionals;
  try {
    allOptionals = await optionalProgram.find({});
  } catch (e) {
    console.log(e, "resetPrograms");
    return false;
  }
  if (allOptionals) {
    for (const option of allOptionals) {
      option.status = optionalStatusEnum.future;
      await option.save();
    }
  }
  return true;
};

export const passedOptional = async (current_round) => {
  let optionals;
  try {
    optionals = await optionalProgram.find({
      round_number: { $lt: current_round },
    });
  } catch (e) {
    console.log(e, "activateOptional");
    return false;
  }
  for (const option of optionals) {
    option.status = optionalStatusEnum.passed;
    await option.save();
  }
};

export const activateOptional = async (round_number = 1) => {
  await resetPrograms();

  let program;
  try {
    [program] = await optionalProgram.find({ round_number });
  } catch (e) {
    console.log(e, "activateOptional");
    return false;
  }
  if (program) {
    program.status = optionalStatusEnum.active;
    program.save();
    await passedOptional(round_number);
    return true;
  }

  return void 0;
};

export const chekCurrentOptionalProgram = async () => {
  let activeProgram;
  const maxRound = 9;
  try {
    [activeProgram] = await optionalProgram.find({ status: "active" });
  } catch (e) {
    console.log(e);
    return void 0;
  }
  if (!activeProgram) {
    console.log("dont find active program");
    return void 0;
  }
  const dateNow = new Date().getTime();
  const { start_round, end_round, round_number } = activeProgram;
  if (dateNow > start_round && dateNow < end_round) {
    console.log("optional program chek");
    return true;
  }
  const nextRound = round_number + 1;
  if (nextRound > maxRound) {
    await resetPrograms();
    console.log("reset optional programs");
    return void 0;
  }
  await activateOptional(nextRound);
  console.log("next optional programs");
  return void 0;
};
