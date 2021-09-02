import express from "express";
import {
  createNews,
  deleteNewsById,
  getAllNews,
  getOneNews,
  last3News,
} from "../controller/newsCtrl.js";
import { jwtGuard } from "../middleware/passport.js";
import { admin } from "../middleware/admin/authMiddle.js";

const router = express.Router();

//get
router.route("/").get(getAllNews);
router.route("/lst3nw").get(last3News);
router.route("/:id").get(getOneNews);
//delete
router.route("/:id").delete(deleteNewsById);
//post
router.route("/").post([jwtGuard(), admin], createNews);

export default router;
