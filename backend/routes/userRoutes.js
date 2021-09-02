import express from "express";
import { updateEveryDayLocal } from "../controller/taskPlanner.js";
import { jwtGuard } from "../middleware/passport.js";
import cors from "cors";
import Upload from "../middleware/upload.js";
import { me, team, updateMe } from "../controller/userCtrl.js";
import { test } from "../controller/testCtrl.js";
import { isDev } from "../utils/utils.js";

const corsOptions = {
  origin: "https://mirax.tech",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const router = express.Router();
router
  .route("/me")
  .get([jwtGuard()], me)
  .patch([jwtGuard(), Upload.single("image")], updateMe);
router.route("/team").get([jwtGuard()], team);
// router
//   .route("/byMrxProgram")
//   .post([jwtGuard(), repleWallet, payPartners], addProgramsMrx);
router.route("/updateEveryDay").post([jwtGuard()], updateEveryDayLocal);

isDev(() => {
  router.route("/test/:id").get([jwtGuard()], test);
  router.route("/test").get([jwtGuard()], test);
  router.route("/test").patch([jwtGuard()], test);
  router.route("/test").post([jwtGuard(), cors(corsOptions)], test);
});
export default router;
