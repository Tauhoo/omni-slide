const { error, warning } = require("../../utilise/log")
const { verify } = require("../../utilise/jwt")
const calculate = async (req, res, next) => {
  try {
    const { rows } = req.database_result
    const { token } = req.body

    if (rows.length < 1) {
      warning("get_file_by_token/calculate")
      return res
        .status(422)
        .send({ status: "warning", type: "text", detail: "file not found" })
    }

    const { id, name, folder_id, data, key } = rows[0]
    const { status } = await verify(token, key)
      .then(res => res)
      .catch(res => res)

    if (status === "error") {
      warning("get_file_by_token/calculate", "token is invalid", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "token is invalid" },
      })
    }

    req.calculate_result = { id, name, folder_id, data }

    next()
  } catch (e) {
    error("get_file_by_token/calculate", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = calculate
