import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
const __dirname = path.resolve();

import connectDB from "./core/connect.js";
import authRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddle.js";

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is runing...");
});
app.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(req.params.id);
});
app.use("/api/auth", authRoutes);

// не найден путь
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server run in ${process.env.NODE_ENV}  on PORT ${PORT}...`.yellow.bold
  )
);
