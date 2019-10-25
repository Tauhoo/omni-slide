const { check, validationResult } = require("express-validator")
const { warning, error } = require("../../utilise/log")
const validator = [
  check("email").isEmail(),
  check("password").isLength({ max: 255 }),
]

const concluder = (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      warning("login/validator", "validation get error", req)
      return res.status(422).send({ status: "warning", detail: errors.array() })
    }
    next()
  } catch (detail) {
    return res.status(500).send({ status: "error" })
  }
}

module.exports = [...validator, concluder]
