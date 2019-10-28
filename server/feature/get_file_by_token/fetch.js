const { get_file } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { user_id, file_id, folder_id } = req.body
    const { status, result, detail } = await get_file(
      file_id,
      folder_id,
      user_id
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
