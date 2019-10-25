const { check } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator(
  [
    check("name")
      .isLength({ max: 30, min: 1 })
      .isString(),
  ],
  "create_folder"
)
