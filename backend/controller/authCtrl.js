import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

import { generateToken } from "../utils/utils.js";
import { roles } from "../config/role.js";

// @desc Register new user
// @route POST /api/auth/
// @access Public
export const regUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;
  // ищем в базе пользователя по email
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = {
    email,
    password,
    name,
  };
  const user = await User.create(newUser);
  if (user) {
    res.json(getUserWithToken(user));
  } else {
    errorThrow("Invalid user data", 400, res);
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

export const redirectWithReferral = asyncHandler(async (req, res) => {
  console.log("test", "redirectWithReferral");
  req.referralId = req.params.id;
  res.redirect("/api/auth");
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
