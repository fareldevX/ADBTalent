import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import transporter from "../config/mailer.js";
import { hashToken } from "../utils/hashToken.js";
import { getEmailTemplate } from "../utils/emailTemplate.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

const FRONTEND_URL = process.env.FRONTEND_URL;

export const register = async (req, res) => {
  try {
    const { username, fullName, headline, location, about, email, password } =
      req.body;

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
      fullName,
      email,
      password: hashedPassword,
      role: "talent",
      isVerified: false,
      verificationToken: hashToken(rawToken),
      avatar: `https://ui-avatars.com/api/?name=${fullName || username}&background=0d1323&color=ffffff`,
      profile: {
        title: headline,
        badgeStatus: [],
        location,
        about,
        resumeUrl: "",
        isDiscoverable: false,
        badges: [],
        skills: [],
        socials: {
          linkedin: "",
          github: "",
          portfolio: "",
        },
        awards: [],
        experiences: [],
        projects: [],
        educations: [],
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

export const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "Email not registered",
      });
    }

    const rawToken = crypto.randomBytes(20).toString("hex");

    user.resetPasswordToken = hashToken(rawToken);
    user.resetPasswordExpire = new Date(Date.now() + 3600000);
    await user.save();

    const url = `${FRONTEND_URL}/reset-password/${rawToken}`;
    const mailOptions = {
      from: `"ADBTalent Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Reset Password ADBTalent",
      html: getEmailTemplate(user.username, url, "reset"),
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      status: "success",
      message: "The password reset link has been sent to the email",
    });
  } catch (err) {
    console.error("Forgot Password Error", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: hashToken(req.params.token),
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Token is invalid or has expired",
      });
    }

    user.password = await bcrypt.hash(req.body.password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Password successfully updated",
    });
  } catch (err) {
    console.error("Reset Password Error", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        status: "fail",
        message: "Unauthorized",
      });
    }

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, decode) => {
      if (err) {
        res.clearCookie("refreshToken", { path: "/" });
        return res.status(403).json({
          status: "fail",
          message: "Forbidden. Please login again.",
        });
      }

      User.findById(decode.userId)
        .then((user) => {
          if (!user) {
            res.clearCookie("refreshToken", { path: "/" });
            return res.status(403).json({
              status: "fail",
              message: "User no longer exists",
            });
          }

          const newAccessToken = generateAccessToken(user);

          res.status(200).json({
            status: "success",
            data: { accessToken: newAccessToken },
          });
        })
        .catch(() => {
          res.status(403).json({
            status: "fail",
            message: "User no longer exists",
          });
        });
    });
  } catch (err) {
    console.error("Refresh Token Error", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
