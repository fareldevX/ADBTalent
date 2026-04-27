import express from "express";
import { verifyToken } from "../middleware/verifyToken";
import { profile } from "../controllers/user";

const router = express.Router();

router.get("/profile", verifyToken, profile);

export default router;
