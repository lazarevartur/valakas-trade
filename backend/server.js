import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import passport from "passport";
const __dirname = path.resolve();
dotenv.config();
import connectDB from "./core/connect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import programsRoutes from "./routes/programsRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddle.js";
import { JwtPassport } from "./middleware/passport.js";

const app = express();
connectDB();

app.use(passport.initialize());
JwtPassport(passport);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/programs", programsRoutes);

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
//Регистрация роутор api

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
