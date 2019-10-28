const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    if (req.database_result.rows.length < 1) {
      warning("get_file/sender", "file not found", req)
      return res.send({
        status: "warning",
        type: "text",
        detail: { text: "file not found" },
      })
    }

    success("get_file/sender", "user get file success", req)
    res.send({
      status: "success",
      result: req.database_result.rows[0],
    })
  } catch (e) {
    error("get_file/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
