const { update_file_name } = require("../../database")
const { error } = require("../../utilise/log")

const store = async (req, res, next) => {
  try {
    const { id, folder_id, name } = req.body
    const { status, result, detail } = await update_file_name(
      id,
      folder_id,
      req.session.user.id,
      name
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("update_file_name/store", "error in try catch", detail, req)
  }
}

module.exports = store
