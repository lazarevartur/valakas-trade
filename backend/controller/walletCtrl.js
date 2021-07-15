import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import mongoose from "mongoose";
import mrxPrograms from "../models/programModel.js";
import { getDayinMm } from "../utils/utils.js";
import optionalPrograms from "../models/optionalProgramModel.js";

// Принимает id пользователя и сумму пополнения
// id = req.user, amount = req.body
// в req.isPayd кладет ответ от оплаты bool
export const repleWallet = asyncHandler(async (req, res) => {
  const user_id = req.user;
  let user;

  const { amount } = req.body;

  try {
    user = await User.findById(user_id).select(
      "total_investment wallets.start_account"
    );
  } catch (error) {
    console.log(error);
    return res.status(404).send("Пользователь не найден");
  }

  // пополнение
  if (user && amount > 0) {
    user.wallets.start_account += Number(amount);
    user.total_investment += Number(amount);
    user.save();
  } else {
    return res.status(400).send({
      message: "Неверная сумма пополнения",
    });
  }

  return res.send({
    message: `Успешное пополнение на сумму ${amount}`,
    status: "ok",
  });
});

export const buyMrxProgram = asyncHandler(async (req, res) => {
  const { program_id, amount } = req.body;
  const user_id = req.user;
  let program;
  let user;
  if (mongoose.isValidObjectId(program_id)) {
    try {
      program = await mrxPrograms.findById(program_id).lean();
      user = await User.findById(user_id);
      const endTime = Date.now() + getDayinMm(program.validity);
      const programIsActive = user.programs.mrx.find((item) => {
        return item.program == program_id;
      });
      const enoughMoney = amount >= program.price;
      if (!programIsActive && enoughMoney) {
        user.programs.mrx.push({
          ending_time: endTime,
          program: program._id,
        });
        user.wallets.start_account -= amount;
        user.programs_wallets.mrx += amount;
        user.save();

        return res.json({
          message: "Программа успешно купленна",
          status: "ok",
        });
      } else {
        return res.json({
          message: "Нельзя купить одинаковые программы",
          status: "ok",
        });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json({ message: "Программа или пользователь не найден" });
    }
  }
  return res.status(404).json({ message: "Не верные данные" });
});

//amount количество опционов
export const buyOptionalProgram = asyncHandler(async (req, res) => {
  console.log("=============buyOptionalProgram===============");
  const { program_id, amount } = req.body;
  console.log(amount);
  const user_id = req.user;
  let program;
  let user;

  if (mongoose.isValidObjectId(program_id)) {
    try {
      program = await optionalPrograms.findById(program_id);
      user = await User.findById(user_id);
      const optionalToMany = amount * program.cost;
      const enoughMoney = user.wallets.start_account >= optionalToMany;
      const userOption = findOptional(user.programs.optional, program_id);

      if (enoughMoney) {
        if (!userOption) {
          user.programs.optional.push({
            program: program._id,
            quantity: amount,
            round_number: program.round_number,
            cost: program.cost,
            profitability: program.profitability,
          });
        } else {
          userOption.quantity += +amount;
        }

        user.wallets.start_account -= optionalToMany;
        user.programs_wallets.options += optionalToMany;
        program.quantity -= +amount;
        program.collected += +optionalToMany;

        user.save();
        program.save();

        return res.status(200).json({
          message: "Опционы успешно приобритенны",
        });
      } else {
        return res.status(400).json({ message: "недостаточно средств" });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Ошибка на сервере" });
    }
  }
  return res.status(404).json({ message: "Не верные данные" });
});

function findOptional(userOptionals, currentOptionalId) {
  return userOptionals.find((item) => {
    return item.program == currentOptionalId;
  });
}

// export const repleWallet = asyncHandler(async (req, res, next) => {
//   const programId = req.body.program_id;
//   const user_id = req.user;
//   let user;
//   let program;
//   try {
//     program = await mrxPrograms.findById(programId).select("price -_id").lean();
//     if (!program) {
//       return res.status(404).send("Программа не найдена");
//     }
//   } catch (e) {
//     console.log(e);
//     return res.status(404).send("Программа ошибка по программам");
//   }
//
//   const amount = req.body.amount || program.price;
//
//   req.isPayd = false;
//
//   try {
//     user = await User.findById(user_id).select(
//       "Inviting_id total_investment configUser.linear_premium programs_walets"
//     );
//   } catch (error) {
//     console.log(error);
//     return res.status(404).send("Пользователь не найден");
//   }
//
//   // пополнение
//   if (user && amount > 0) {
//     user.programs_walets.mrx += Number(amount);
//     user.total_investment += Number(amount);
//     user.save();
//     req.isPayd = true;
//     req.body.amount = amount;
//   } else {
//     return res.status(400).send({
//       message: "Неверная сумма пополнения",
//     });
//   }
//
//   if (req.isPayd) {
//     next();
//   } else {
//     return res.send("Ошибка при оплате ");
//   }
// });
