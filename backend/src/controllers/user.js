import User from "../models/User";

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
