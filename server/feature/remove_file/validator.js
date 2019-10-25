const { check } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator(
  [check("id").isNumeric(), check("folder_id").isNumeric()],
  "remove_file"
)
