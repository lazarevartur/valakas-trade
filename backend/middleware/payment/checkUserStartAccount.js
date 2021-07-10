import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import mrxPrograms from "../../models/programModel.js";

// мидл для оплаты пополнения стартового кошелька
// Принимает id пользователя и сумму пополнения
// id = req.user, cost = req.body
// в req.isPayd кладет ответ от оплаты bool
export const checkUserStartAccount = asyncHandler(async (req, res, next) => {
  const user_id = req.user;
  let user;

  const { amount } = req.body;

  try {
    user = await User.findById(user_id).select("wallets.start_account");
  } catch (error) {
    console.log(error);
    return res.status(404).send("Пользователь не найден");
  }

  // пополнение
  if (user.wallets.start_account >= amount) {
    next();
  } else {
    return res.status(400).send({
      message: "Недостаточнно средств на счету",
    });
  }
});
