const { param } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator(
  [
    param("folder_id")
      .exists()
      .toInt()
      .isNumeric(),
  ],
  "get_folder_file"
)
