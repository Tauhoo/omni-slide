const config = require("./config")
const express = require("express")
const app = express()

app.use(express.urlencoded())
app.use(express.json())

// ใส่ route ตรงนี้

app.listen(config.port, () => {
  console.log(`server running on port ${config.port}`)
})
