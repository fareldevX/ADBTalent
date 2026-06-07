import User from "../models/User.js";

export const dashboard = async (req, res) => {
  try {
    const totalStudents = await User.countDocuments({ role: "talent" });

    const verifiedCVs = await User.countDocuments({
      role: "talent",
      isVerified: true,
    });

    const activePartners = 0;

    const pendingApprovals = await User.find({
      role: "talent",
      isVerified: false,
    })
      .select("username fullName profile.title profile.location")
      .limit(5);

    const talents = await User.find({ role: "talent" }).select(
      "username fullName profile.title isVerified",
    );

    res.status(200).json({
      status: "success",
      data: {
        stats: { totalStudents, verifiedCVs, activePartners },
        pendingApprovals,
        talents,
      },
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server database error" });
  }
};

export const approveById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { isVerified: true },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to verify user" });
  }
};

export const rejectById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        isVerified: false,
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (error) {
    console.error("Reject error:", error);
    res.status(500).json({ message: "Failed to reject user" });
  }
};

export const editTalentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, title, isVerified } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullName,
        isVerified,
        "profile.title": title,
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      updatedUser,
    });
  } catch (error) {
    console.error("Edit talent error:", error);
    res.status(500).json({ message: "Failed to update talent data" });
  }
};
