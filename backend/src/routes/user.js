import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { upload } from "../config/cloudinary.js";
import { profile, updateProfile } from "../controllers/user.js";

const router = express.Router();

router.get("/profile", verifyToken, profile);
router.put("/profile", verifyToken, upload.single("avatar"), updateProfile);

export default router;
