const { login } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { email } = req.body
    const { status, result, detail } = await login(email)
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("login/fetch", "error in try catch", detail, req)
  }
}

module.exports = fetch
