import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import {
  dashboard,
  approveById,
  rejectById,
  editTalentById,
} from "../controllers/admin.js";

const router = express.Router();

router.get("/dashboard", verifyToken, dashboard);
router.patch("/approve/:id", verifyToken, approveById);
router.patch("/reject/:id", verifyToken, rejectById);
router.put("/talent/edit/:id", verifyToken, editTalentById);

export default router;
