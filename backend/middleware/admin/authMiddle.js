import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import { roles } from "../../config/role.js";

const admin = asyncHandler(async (req, res, next) => {
  if (req.user) {
    const user = await User.findById(req.user);
    if (user && user.access === roles.admin) {
      next();
    } else {
      res.status(401);
      throw new Error("no access");
    }
  } else {
    res.status(401);
    throw new Error("user not found");
  }
});
export { admin };
