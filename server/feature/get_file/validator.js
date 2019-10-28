const { param } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator(
  [
    param("file_id")
      .exists()
      .toInt()
      .isNumeric(),
    param("folder_id")
      .exists()
      .toInt()
      .isNumeric(),
  ],
  "git_file"
)
