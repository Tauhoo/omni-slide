const { client } = require("../config")
module.exports = (req, res, next) => {
  const allowedOrigins = [client]

  const origin = req.headers.origin

  if (allowedOrigins.indexOf(origin) > -1)
    res.setHeader("Access-Control-Allow-Origin", origin)

  res.header("Access-Control-Allow-Credentials", "true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET")
    return res.status(200).json({})
  }
  next()
}
