const { update_file } = require("../../database")
const { error } = require("../../utilise/log")

const store = async (req, res, next) => {
  try {
    const { id, folder_id, data } = req.body
    const { status, result, detail } = await update_file(
      id,
      folder_id,
      req.session.user.id,
      data
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("update_file/fetch", "error in try catch", detail, req)
  }
}

module.exports = store
