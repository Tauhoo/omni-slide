const bcrypt = require("../../utilise/bcrypt")
const { warning, error } = require("../../utilise/log")
const calculator = async (req, res, next) => {
  try {
    const user_list = req.database_result.rows
    const input_password = req.body.password

    if (user_list.length < 1) {
      warning("login/caculator", "user not found in database", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "user not found" },
      })
    }

    const database_password = user_list[0].password
    const { status, result, detail } = await bcrypt
      .compare(input_password, database_password)
      .then(res => res)
      .catch(res => res)

    if (status === "error") {
      error(
        "login/calculator",
        "can't compare password with bcrypt",
        detail,
        req
      )
      return res.status(500).send({ status: "error" })
    }

    if (result) {
      next()
    } else {
      warning("login/calculator", "password od wrong", req)
      res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "password is wrong" },
      })
    }
  } catch (e) {
    error("login/calculator", "can't compare password with bcrypt", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = calculator
