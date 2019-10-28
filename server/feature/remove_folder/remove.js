const { remove_folder } = require("../../database")
const { error } = require("../../utilise/log")

const fetch = async (req, res, next) => {
  try {
    const { id } = req.body
    const { status, result, detail } = await remove_folder(
      id,
      req.session.user.id
    )
    if (status === "error") throw detail
    req.database_result = result
    next()
  } catch (detail) {
    res.status(500).send({ status: "error" })
    error("remove_folder/fetch", "error in try catch", detail, req)
  }
}

module.exports = fetch
