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
    password: { type: String, required: true, minLength: 6, select: false },
    fullName: { type: String, required: true, trim: true },
    role: { type: String, enum: ["talent", "admin"], default: "talent" },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, sparse: true },
    resetPasswordToken: { type: String, sparse: true },
    resetPasswordExpire: Date,
    avatar: {
      type: String,
      default: "https://ui-avatars.com/api/?background=0d1323&name=User",
    },
    profile: {
      title: { type: String, trim: true },
      location: { type: String, trim: true },
      about: { type: String, maxLength: 1000 },
      badgeStatus: [String],
      resumeUrl: { type: String },
      isDiscoverable: { type: Boolean, default: false },

      badges: [String],

      skills: [String],
      socials: {
        linkedin: String,
        github: String,
        portfolio: String,
      },

      awards: [
        {
          awardName: String,
          organization: String,
          year: String,
          description: String,
        },
      ],

      experiences: [
        {
          jobTitle: String,
          company: String,
          type: {
            type: String,
            enum: ["Work", "Organization", "Leadership"],
            default: "Work",
          },
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
          image: String,
        },
      ],

      educations: [
        {
          institution: String,
          degree: {
            type: String,
            enum: [
              "High School",
              "Vocational High School",
              "Bachelor's Degree",
              "Certification/BootCamp",
            ],
            default: "",
          },
          major: String,
          startDate: Date,
          endDate: Date,
          isCurrent: { type: Boolean, default: false },
          description: String,
        },
      ],
    },
  },
  { timestamps: true },
);

export default model("User", userSchema);
