import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import passport from "passport";
import enforce from "express-sslify";
const __dirname = path.resolve();
dotenv.config();
import cron from "node-cron";
import connectDB from "./core/connect.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import programsRoutes from "./routes/programsRoutes.js";
import walletsRoute from "./routes/walletsRoute.js";
import historyRoute from "./routes/historyRoute.js";
import adminRoutes from "./routes/adminRoutes.js";
import sendEmailRoutes from "./routes/sendEmailRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddle.js";
import { jwtGuard, JwtPassport } from "./middleware/passport.js";
import { updateEveryDay } from "./cron/taskPlanner.js";
import { admin } from "./middleware/admin/authMiddle.js";

const app = express();
connectDB();

app.use(passport.initialize());
JwtPassport(passport);

app.use(cors());
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "/backend/public")));
app.use("/", express.static(path.join(__dirname, "/backend")));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/programs", programsRoutes);
app.use("/api/wallets", walletsRoute);
app.use("/api/history", historyRoute);
app.use("/api/send-email", sendEmailRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/adm", [jwtGuard(), admin], adminRoutes);

cron.schedule("0 0 * * *", async () => {
  await updateEveryDay();
});

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
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
