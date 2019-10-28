const { query } = require("express-validator")
const { decode } = require("../../utilise/jwt")
const validate_generator = require("../../utilise/validate_generator")
const { error, warning } = require("../../utilise/log")

const decode_token = async (req, res, next) => {
  try {
    const { token } = req.query
    const decoded_token = decode(token)

    if (decoded_token === null) {
      warning("get_file_by_token/validator", "token is invalid", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "token is invalid" },
      })
    }

    const { user_id, file_id, folder_id } = decoded_token
    if (
      typeof user_id !== "number" ||
      typeof file_id !== "number" ||
      typeof folder_id !== "number"
    ) {
      warning("get_file_by_token/validate", "token is invalid", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "token is invalid" },
      })
    }

    req.body = { user_id, file_id, folder_id, token }

    next()
  } catch (e) {
    error("get_file_by_token/validate", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = [
  ...validate_generator(
    [
      query("token")
        .exists()
        .isString(),
    ],
    "get_file_by_token"
  ),
  decode_token,
]
