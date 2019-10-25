const bcrypt = require("bcrypt-nodejs")

exports.encrypt = password =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, null, null, (err, hash) => {
      if (err) {
        reject({ status: "error", detail: err })
      } else {
        resolve({ status: "success", result: hash })
      }
    })
  })

exports.compare = (password, hash) =>
  new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function(err, res) {
      if (err) {
        reject({ status: "error", detail: err })
      } else {
        resolve({ status: "success", result: res })
      }
    })
  })
