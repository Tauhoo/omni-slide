const { register } = require("../../database")
const { error, warning } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { password, username, email, token } = req.body
    const { status, result, detail } = await register(
      username,
      password,
      email,
      token
    )

    if (status === "error") {
      error("register/store", "error when store data", detail, req)
      return res.status(500).send({
        status: "error",
      })
    }

    if (result.rows.length < 1) {
      warning("register/store", "email is already used", req)
      return res
        .status(422)
        .send({
          status: "warning",
          type: "text",
          detail: { text: "email is already used" },
        })
    }

    req.database_result = result
    next()
  } catch (detail) {
    error("register/store", "error in try catch", detail, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = fetch
