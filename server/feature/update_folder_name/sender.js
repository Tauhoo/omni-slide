const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    const list = req.database_result.rows

    if (list.length < 1) {
      warning("update_folder_name/sender", "folder not found", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: {
          text: "folder not found",
        },
      })
    }

    success("update_folder_name/sender", "user remove file success", req)
    res.send({ status: "success" })
  } catch (e) {
    error("update_folder_name/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
