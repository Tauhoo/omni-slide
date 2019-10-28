const { success, error, warning } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    success("get_file_by_token/sender", "user get file success", req)
    res.send({
      status: "success",
      result: req.calculate_result,
    })
  } catch (e) {
    error("get_file_by_token/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
