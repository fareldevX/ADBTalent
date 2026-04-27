import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  const authHeaderStr = Array.isArray(authHeader) ? authHeader[0] : authHeader;

  if (!authHeaderStr || !authHeaderStr.startsWith("Bearer ")) {
    return res.status(400).json({
      status: "fail",
      message: "Access denied. Token not found or invalid format",
    });
  }

  const token = authHeaderStr.split(" ")[1];
  const secretKey = process.env.JWT_ACCESS_ACCESS;

  if (!secretKey) {
    return res.status(500).json({
      status: "error",
      message: "Server configuration error: JWT secret key is missing",
    });
  }

  if (!token || typeof token !== "string" || token.trim() === "") {
    return res.status(401).json({
      status: "fail",
      message: "Access denied. Token not found or invalid format",
    });
  }

  jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      return res.status(401).json({
        status: "fail",
        message: "Token is invalid or has expired",
      });
    }

    const payload = decode;
    req.userId = payload.userId;

    next();
  });
};
