import express from "express";
import { jwtGuard } from "../middleware/passport.js";
import {
  completedHistoryUser,
  pendingHistoryUser,
} from "../controller/historyCtrl.js";

const router = express.Router();

router.route("/").get([jwtGuard()], pendingHistoryUser);
router.route("/completed").get([jwtGuard()], completedHistoryUser);

export default router;
