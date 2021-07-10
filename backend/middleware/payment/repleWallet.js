import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import mrxPrograms from "../../models/programModel.js";

// мидл для оплаты пополнения стартового кошелька
// Принимает id пользователя и сумму пополнения
// id = req.user, cost = req.body
// в req.isPayd кладет ответ от оплаты bool
// export const repleWallet = asyncHandler(async (req, res) => {
//   const user_id = req.user;
//   let user;
//
//   const { cost } = req.body;
//
//   try {
//     user = await User.findById(user_id).select(
//       "total_investment wallets.start_account"
//     );
//   } catch (error) {
//     console.log(error);
//     return res.status(404).send("Пользователь не найден");
//   }
//
//   // пополнение
//   if (user && cost > 0) {
//     user.wallets.start_account += Number(cost);
//     user.total_investment += Number(cost);
//     user.save();
//   } else {
//     return res.status(400).send({
//       message: "Неверная сумма пополнения",
//     });
//   }
//
//   return res.send({
//     message: `Успешное пополнение на сумму ${cost}`,
//     status: "ok",
//   });
// });

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
//   const cost = req.body.cost || program.price;
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
//   if (user && cost > 0) {
//     user.programs_walets.mrx += Number(cost);
//     user.total_investment += Number(cost);
//     user.save();
//     req.isPayd = true;
//     req.body.cost = cost;
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
