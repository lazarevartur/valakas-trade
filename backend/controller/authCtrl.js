import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

import { generateToken } from "../utils/utils.js";
import { roles } from "../config/role.js";

// @desc Register new user
// @route POST /api/auth/
// @access Public
export const regUser = asyncHandler(async (req, res) => {
  const { email, password, name, ref } = req.body;
  console.log(ref, "ref");
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ email, password, name });
  //TODO REFACTORING
  if (ref) {
    const firstLine = await User.findById(ref);
    if (firstLine) {
      firstLine.friends.firsLine.push(user._id);
      user.invitingId = firstLine._id;
      firstLine.save();
      if (firstLine.invitingId) {
        const secondLine = await User.findById(firstLine.invitingId);
        secondLine.friends.secondLine.push(user._id);
        secondLine.save();
        if (secondLine.invitingId) {
          const thirdLine = await User.findById(secondLine.invitingId);
          thirdLine.friends.thirdLine.push(user._id);
          thirdLine.save();
        }
      }
    } else {
      res.status(400);
      throw new Error("no find user ref");
    }
  }

  user.referralLink = user._id;

  user.save();
  if (user) {
    res.json(getUserWithToken(user));
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc login user && get token
// @route POST /api/auth/login
// @access Public
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // ищем в базе пользователя по email
  const user = await User.findOne({ email });

  // проверяем есть ли пользователь и если есть проверяем его пароль
  if (user && (await user.matchPassword(password))) {
    res.json(getUserWithToken(user));
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const getUserWithToken = (user) => {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
    access: roles.user,
  };
};

export const repleWallet = asyncHandler(async (req, res) => {
  const { count, _id } = req.body;
  const user = await User.findById(_id);
  user.deposit += Number(count);
  user.save();

  const firstLine = await User.findById(user.invitingId);
  if (firstLine) {
    firstLine.incomeFromPartners.depositIncome += 100;
    firstLine.save();
    if (firstLine.invitingId) {
      const secondLine = await User.findById(firstLine.invitingId);
      secondLine.incomeFromPartners.depositIncome += 10;
      secondLine.save();
      if (secondLine.invitingId) {
        const thirdLine = await User.findById(secondLine.invitingId);
        thirdLine.incomeFromPartners.depositIncome += 1;
        thirdLine.save();
      }
    }
  } else {
    res.status(400);
    throw new Error("no pay");
  }

  if (user) {
    res.json("good");
  } else {
    res.status(400);
    throw new Error("no good");
  }
});
