import express from "express";
import { getMrxPrograms } from "../controller/programsCtrl.js";

const router = express.Router();

router.route("/mrx").get(getMrxPrograms);

export default router;
