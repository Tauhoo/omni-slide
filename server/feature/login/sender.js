const { success, error } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const user = req.database_result.rows[0]
    req.session.user = user
    const { username, email, token } = user
    delete user.password

    success("login/sender", "user login success", req)
    res.send({
      status: "success",
      result: {
        username,
        email,
        token,
      },
    })
  } catch (e) {
    error("login/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
