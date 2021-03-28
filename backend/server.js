import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
const __dirname = path.resolve();

import connectDB from "./core/connect.js";
import authRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddle.js";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is runing...");
  });
}

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
