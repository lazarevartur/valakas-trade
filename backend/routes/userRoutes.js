import express from "express";
import {
  regUser,
  login,
  redirectWithReferral,
} from "../controller/authCtrl.js";

const router = express.Router();
//auth routs and ref
// /api/auth
router.route("/").post(regUser);
// router.route("/r/:id").get(redirectWithReferral);
router.route("/login").post(login);

export default router;
