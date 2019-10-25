const bcrypt = require("../../utilise/bcrypt")
const cryptoRandomString = require("crypto-random-string")
const { error } = require("../../utilise/log")

const calculator = async (req, res, next) => {
  try {
    let { password } = req.body

    let { status, result, detail } = await bcrypt
      .encrypt(password)
      .then(res => res)
      .catch(res => res)

    if (status === "error") {
      error("register/calculator", "encrypt error", detail, req)
      return res.status(500).send({ status: "error" })
    }

    req.body.token = cryptoRandomString({ length: 10 })
    req.body.password = result
    next()
  } catch (detail) {
    error("register/calculator", "error in try catch", detail, req)
    res.status(500).send({
      status: "error",
    })
  }
}

module.exports = calculator
