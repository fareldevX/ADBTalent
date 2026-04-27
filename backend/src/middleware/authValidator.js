import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({
    status: "error",
    errors: errors.array(),
  });
};

export const registerValidator = [
  body("username").isLength({ min: 5 }).withMessage("username is too short"),
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimum 6 characters"),
  validate,
];
