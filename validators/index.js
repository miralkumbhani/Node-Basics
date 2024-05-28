const { body, validationResult } = require("express-validator");

exports.createPostValidator = [
  // Validate title
  body("title")
    .notEmpty()
    .withMessage("Title cannot be empty.")
    .isLength({ min: 4, max: 150 })
    .withMessage("Title must be between 4 to 150 characters"),
  // Validate body
  body("body")
    .notEmpty()
    .withMessage("Body cannot be empty.")
    .isLength({ min: 4, max: 150 })
    .withMessage("Body must be between 4 to 150 characters"),
  // Check for validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  },
];
