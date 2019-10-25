const { check } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator(
  [
    check("email").isEmail(),
    check("password")
      .isLength({ max: 100, min: 6 })
      .isString(),
    check("username")
      .isLength({ max: 30, min: 6 })
      .isString(),
  ],
  "register"
)
