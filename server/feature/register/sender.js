const { success, error } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const user = req.database_result.rows[0]
    delete user.password
    delete user.id

    success("register/sender", "user login success", req)
    res.send({ status: "success", result: user })
  } catch (e) {
    error("register/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
