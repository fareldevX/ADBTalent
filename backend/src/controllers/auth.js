import bcrypt from "bcrypt";
import crypto from "crypto";
import User from "../models/User.js";
import transporter from "../config/mailer.js";
import { hashToken } from "../utils/hashToken.js";
import { getEmailTemplate } from "../utils/emailTemplate.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

const FRONTEND_URL = process.env.FRONTEND_URL;

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "Username or Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const rawToken = crypto.randomBytes(20).toString("hex");

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationToken: hashToken(rawToken),
      avatar: `https://ui-avatars.com/api/?name=${username}&background=random&color=fff`,
      profile: {
        skills: [],
        experiences: [],
        projects: [],
        educations: [],
        socials: {
          linkedin: "",
          github: "",
          portfolio: "",
        },
      },
    });

    const url = `${FRONTEND_URL}/verify-email/${rawToken}`;
    const mailOptions = {
      from: `"ADBTalent Support" <${process.env.EMAIL_USER}>`,
      to: newUser.email,
      subject: "Verify Your Email",
      html: getEmailTemplate(username, url, "verify"),
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (err) {
    console.error("Failed to add user", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const user = await User.findOne({
      verificationToken: hashToken(req.params.token),
    });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid or expired verification token",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Verification email successfully",
    });
  } catch (err) {
    console.error("Failed to verify email", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        status: "fail",
        message: "Email is already verified",
      });
    }

    const rawToken = crypto.randomBytes(20).toString("hex");
    user.verificationToken = hashToken(rawToken);
    await user.save();

    const url = `${FRONTEND_URL}/verify-email/${rawToken}`;
    const mailOptions = {
      from: `"ADBTalent Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Verify Your Email",
      html: getEmailTemplate(user.username, url, "verify"),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: "success",
      message: "Verification email sent successfully",
    });
  } catch (err) {
    console.error("Failed resend verification email", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (
      !user ||
      !user.isVerified ||
      !(await bcrypt.compare(password, user.password))
    ) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid email or password",
      });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      status: "success",
      data: { accessToken },
    });
  } catch (err) {
    console.error("Failed to login", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
