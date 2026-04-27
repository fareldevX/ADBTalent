import express from "express";
import { registerValidator } from "../middleware/authValidator.js";
import {
  register,
  verifyEmail,
  resendVerification,
  login,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/verify-email/:token", verifyEmail);
router.post("resend-verification", resendVerification);
router.post("/login", login);

export default router;
