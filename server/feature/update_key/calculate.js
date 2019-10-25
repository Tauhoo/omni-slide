const { error } = require("../../utilise/log")
const cryptoRandomString = require("crypto-random-string")
const calculator = (req, res, next) => {
  try {
    req.new_token = cryptoRandomString({ length: 10 })
    next()
  } catch (e) {
    error("update_key/calculator", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = calculator
