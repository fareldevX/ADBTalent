import express from "express";
import { registerValidator } from "../middleware/authValidator.js";
import {
  register,
  verifyEmail,
  resendVerification,
  login,
  forgotPassword,
  resetPassword,
  refresh,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/register", registerValidator, register);
router.post("/verify-email/:token", verifyEmail);
router.post("/resend-verification", resendVerification);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);
router.post("/refresh", refresh);

export default router;
