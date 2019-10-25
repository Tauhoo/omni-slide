const { validationResult } = require("express-validator")
const { warning, error } = require("./log")

const concluder = route => (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      warning(`${route}/validator`, "validation get error", req)
      return res.status(422).send({
        status: "warning",
        type: "validate",
        detail: errors.array()[0],
      })
    }
    next()
  } catch (detail) {
    error(`${route}/validator`, "error in try catch", detail, req)
    return res.status(500).send({ status: "error" })
  }
}

module.exports = (validator, route) => [...validator, concluder(route)]
