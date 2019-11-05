const { error } = require("../../utilise/log")
const calculator = async (req, res, next) => {
  try {
    if (!req.session.user)
      return res.status(422).send({
        status: "warning",
        type: "text",
        detail: { text: "did't login" },
      })

    next()
  } catch (e) {
    error("filter_not_login/calculator", "error in try catch", e, req)
    res.status(500).send({
      status: "error",
    })
  }
}

module.exports = calculator
