const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const list = req.database_result.rows

    if (list.length < 1) {
      warning("create_file/sender", "folder not found", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: {
          text: "folder not found",
        },
      })
    }

    success("create_file/sender", "user create file success", req)
    res.send({ status: "success" })
  } catch (e) {
    error("create_file/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
