const jwt = require("jsonwebtoken")

const encode = (data, secret) =>
  new Promise(resolve => {
    jwt.sign(data, secret, detail => {
      if (err) reject({ status: "error", detail })
      resolve({ status: "success" })
    })
  })

const verify = (token, secret) =>
  new Promise(resolve => {
    jwt.verify(token, secret, (detail, result) => {
      if (err) reject({ status: "error", detail })
      resolve({ status: "success", result })
    })
  })

module.exports = {
  encode,
  decode: jwt.decode,
  verify,
}
