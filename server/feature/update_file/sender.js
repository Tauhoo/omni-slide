const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const list = req.database_result.rows

    if (list.length < 1) {
      warning("update_file/sender", "folder not found", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: {
          text: "file not found",
        },
      })
    }

    success("update_file/sender", "user remove file success", req)
    res.send({ status: "success" })
  } catch (e) {
    error("update_file/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
