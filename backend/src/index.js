import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./utils/connectDB.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

dotenv.config();
const app = express();
connectDB();

app.use(
  cors({
    origin: ["https://adb-talent.vercel.app", "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
    ],
  }),
);
app.options("*", cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend ADBTalent Server is running...");
});
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

export default app;
