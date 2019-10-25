const { remove_file } = require("../../database")
const { error } = require("../../utilise/log")

const fetch = async (req, res, next) => {
  try {
    const { id, folder_id } = req.body
    const { status, result, detail } = await remove_file(
      id,
      folder_id,
      req.session.user.id
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("remove_file/fetch", "error in try catch", detail, req)
  }
}

module.exports = fetch
