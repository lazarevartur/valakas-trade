import express from "express";
import {
  getMrxPrograms,
  getOptionalPrograms,
  getActiveOptionalProgram,
  getMrxProgram,
  getAvailableMrxPrograms,
} from "../controller/programsCtrl.js";
import { jwtGuard } from "../middleware/passport.js";

const router = express.Router();

router.route("/mrx").get(getMrxPrograms).post([jwtGuard()], getMrxProgram);
router.route("/mrx-available").get([jwtGuard()], getAvailableMrxPrograms);
router.route("/optional").get(getOptionalPrograms);
router.route("/optional/active-program").get(getActiveOptionalProgram);

export default router;
