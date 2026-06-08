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

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
];

if (process.env.FRONTEND_URL) {
  const frontendUrl = process.env.FRONTEND_URL.trim();
  const originUrl = frontendUrl.startsWith("http") ? frontendUrl : `https://${frontendUrl}`;
  allowedOrigins.push(originUrl);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, postman)
      if (!origin) return callback(null, true);
      
      const isAllowed = allowedOrigins.includes(origin) || 
                        origin.endsWith(".vercel.app") || 
                        /^http:\/\/localhost:\d+$/.test(origin);
      
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend ADBTalent Server is running...");
});
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

export default app;
