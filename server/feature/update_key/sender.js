const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const list = req.database_result.rows

    if (list.length < 1) {
      warning("update_key/sender", "can't find user", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "can't find user" },
      })
    }

    const { token } = list[0]
    req.session.user.token = token

    success("update_key/sender", "user update key success", req)
    res.send({ status: "success", result: { new_token: token } })
  } catch (e) {
    error("update_key/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
