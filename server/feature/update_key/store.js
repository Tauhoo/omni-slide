const { update_key } = require("../../database")
const { error } = require("../../utilise/log")
const store = async (req, res, next) => {
  try {
    const { id } = req.session.user

    const { status, result, detail } = await update_key(req.new_token, id)

    if (status === "error") {
      error("update_key/store", "error when update database", detail, req)
      return res.status(500).send({ status: "error" })
    }

    req.database_result = result
    next()
  } catch (e) {
    error("update_key/store", "error in try catch", e, req)
  }
}

module.exports = store
