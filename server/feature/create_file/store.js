const { create_file } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { name, folder_id } = req.body
    const { status, result, detail } = await create_file(
      name,
      folder_id,
      req.session.user.id
    )

    if (status === "error") {
      error("create_file/store", "can't add new file to database", detail, req)
      return res.status(500).send({
        status: "error",
      })
    }
    req.database_result = result
    next()
  } catch (detail) {
    error("create_file/store", "error in try catch", detail, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = fetch
