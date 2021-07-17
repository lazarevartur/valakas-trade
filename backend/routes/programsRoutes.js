import express from "express";
import {
  getMrxPrograms,
  getOptionalPrograms,
  getActiveOptionalProgram,
  getMrxProgram,
  getAvailableMrxPrograms,
  getPurchasedOptions,
  getPriorityPrograms,
  getPriorityProgramByName,
  getPurchasedPriorityPrograms,
} from "../controller/programsCtrl.js";
import { jwtGuard } from "../middleware/passport.js";

const router = express.Router();

router.route("/mrx").get(getMrxPrograms).post([jwtGuard()], getMrxProgram);
router.route("/mrx-available").get([jwtGuard()], getAvailableMrxPrograms);

router.route("/optional").get(getOptionalPrograms);
router
  .route("/optional/purchased-options")
  .get([jwtGuard()], getPurchasedOptions);
router.route("/optional/active-program").get(getActiveOptionalProgram);

router.route("/priority").get(getPriorityPrograms);
router
  .route("/priority/current")
  .get([jwtGuard()], getPurchasedPriorityPrograms);
router.route("/priority/:name").get(getPriorityProgramByName);

export default router;
