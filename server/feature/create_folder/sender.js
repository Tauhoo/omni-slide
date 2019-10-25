const { success, error } = require("../../utilise/log")
const sender = async (req, res) => {
  try {
    success("create_folder/sender", "user create folder success", req)
    res.send({ status: "success" })
  } catch (e) {
    error("create_folder/sender", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = sender
