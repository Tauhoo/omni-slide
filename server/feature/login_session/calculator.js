const { warning, error } = require("../../utilise/log")
const calculator = (req, res, next) => {
  try {
    if (!req.session.user) {
      warning("login_session/calculator", "did't login yet", req)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "did't login yet" },
      })
    }
    next()
  } catch (e) {
    error("login_session/calculator", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = calculator
