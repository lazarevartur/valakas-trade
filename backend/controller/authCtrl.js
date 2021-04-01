import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

import { generateToken } from '../utils/utils.js'
import { roles } from '../config/role.js'

// @desc Register new user
// @route POST /api/users/
// @access Public
export const regUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body
  // ищем в базе пользователя по email
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }
  const newUser = {
    email,
    password,
    name,
  }
  const user = await User.create(newUser)
  if (user) {
    res.json(getUserWithToken(user))
  } else {
    errorThrow('Invalid user data', 400, res)
  }
})

const getUserWithToken = (user) => {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id),
    access: roles.user,
  }
}
