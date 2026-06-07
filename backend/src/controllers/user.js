import User from "../models/User.js";

export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    console.error("Failed to get profile", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { fullName } = req.body;
    let { profile, experiences } = req.body;

    if (fullName) user.fullName = fullName;
    if (req.file) user.avatar = req.file.path;

    const parsedProfile =
      typeof profile === "string" ? JSON.parse(profile) : profile;
    const parsedExp =
      typeof experiences === "string" ? JSON.parse(experiences) : experiences;

    if (parsedProfile) {
      user.profile = {
        ...user.profile.toObject(),
        title: parsedProfile.title || user.profile.title,
        badgeStatus: parsedProfile.badgeStatus || user.profile.badgeStatus,
        location: parsedProfile.location || user.profile.location,
        about: parsedProfile.about || user.profile.about,
        resumeUrl: parsedProfile.resumeUrl || user.profile.resumeUrl,
        isDiscoverable: parsedProfile.isDiscoverable,
        badges: parsedProfile.badges || user.profile.badges,
        awards: parsedProfile.awards || user.profile.awards,
        projects: parsedProfile.projects || user.profile.projects,
        skills: parsedProfile.skills || user.profile.skills,
        socials: parsedProfile.socials || user.profile.socials,
        educations: parsedProfile.educations || user.profile.educations,
        experiences:
          parsedExp || parsedProfile.experiences || user.profile.experiences,
      };
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    console.error("Failed to update profile", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
