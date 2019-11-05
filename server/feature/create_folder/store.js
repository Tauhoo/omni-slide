const { create_folder } = require("../../database")
const { error } = require("../../utilise/log")
const fetch = async (req, res, next) => {
  try {
    const { status, detail } = await create_folder(req.body.name, req.session.user.id)
    if (status === "error") {
      error(
        "create_folder/store",
        "can't add new folder to database",
        detail,
        req
      )
      return res.status(500).send({
        status: "error",
      })
    }

    next()
  } catch (detail) {
    error("create_folder/store", "error in try catch", detail, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = fetch
