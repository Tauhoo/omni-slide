const { error, success } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    success(
      "logout/sender",
      "user try to destroy session result is " + req.destroy_result.status,
      req
    )
    res.send(req.destroy_result)
  } catch (e) {
    error("logout/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
