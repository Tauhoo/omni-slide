const { check } = require("express-validator")
const validate_generator = require("../../utilise/validate_generator")
module.exports = validate_generator([check("id").isNumeric()], "remove_folder")
