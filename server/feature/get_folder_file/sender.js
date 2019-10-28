const { success, error } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    success("get_folder_file/sender", "user get file in folder success", req)
    res.send({
      status: "success",
      result: req.database_result.rows,
    })
  } catch (e) {
    error("get_folder_file/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
