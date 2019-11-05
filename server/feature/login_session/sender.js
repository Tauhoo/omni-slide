const { error, success } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const { username, email, token, id } = req.session.user

    success("login_session/sender", "user session login success", req)
    res.send({ status: "success", result: { username, email, token, id } })
  } catch (e) {
    error("login_session/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
