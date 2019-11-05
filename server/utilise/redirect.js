const { client } = require("../config")
const redirect = (req, res, next) => {
  try {
    console.log(req.originalUrl)

    res.redirect(client + req.originalUrl)
  } catch (e) {
    res.status(500).send({ status: "error" })
  }
}

module.exports = redirect
