const { error } = require("../../utilise/log")

const destroy = req =>
  new Promise((resolve, reject) => {
    req.session.destroy(err => {
      if (err) return reject({ status: "error" })
      resolve({ status: "success" })
    })
  })

const calculator = async (req, res, next) => {
  try {
    req.destroy_result = await destroy(req)
      .then(res => res)
      .catch(res => res)

    next()
  } catch (e) {
    error("logout/calculator", "error in try catch", e, req)
    res.status(500).send({ status: "error" })
  }
}

module.exports = calculator
