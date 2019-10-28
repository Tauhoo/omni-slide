const { get_file } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { file_id, folder_id } = req.params
    const { status, result, detail } = await get_file(
      file_id,
      folder_id,
      req.session.user.id
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("get_file/fetch", "error in try catch", detail, req)
  }
}

module.exports = fetch
