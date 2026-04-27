import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["talent", "admin"],
      default: "talent",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: { type: String, sparse: true },
    resetPasswordToken: { type: String, sparse: true },
    resetPasswordExpire: Date,
    avatar: {
      type: String,
      default: "https://ui-avatars.com/api/?background=random&name=New+User",
    },
    profile: {
      title: { type: String, trim: true },
      location: { type: String, trim: true },
      company: { type: String, trim: true },
      about: { type: String, maxLength: 500 },
      skills: [String],
      socials: {
        linkedin: String,
        github: String,
        portfolio: String,
      },
      experiences: [
        {
          jobTitle: String,
          company: String,
          startDate: Date,
          endDate: Date,
          isCurrent: { type: Boolean, default: false },
          description: String,
        },
      ],
      projects: [
        {
          projectName: String,
          description: String,
          tools: [String],
          link: String,
        },
      ],
      educations: [
        {
          institution: String,
          degree: String,
          fieldOfStudy: String,
          startDate: Date,
          endDate: Date,
          description: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  },
);

export default model("User", userSchema);
