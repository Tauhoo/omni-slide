const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const list = req.database_result.rows

    if (list.length < 1) {
      warning("remove_folder/sender", "folder not found", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: {
          text: "folder not found",
        },
      })
    }

    success("remove_folder/sender", "user remove folder success", req)
    res.send({ status: "success" })
  } catch (e) {
    error("remove_folder/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
