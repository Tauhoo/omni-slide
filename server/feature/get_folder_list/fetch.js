const { get_folder_list } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { status, result, detail } = await get_folder_list(
      req.session.user.id
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("get_folder_list/fetch", "error in try catch", detail, req)
  }
}

module.exports = fetch
