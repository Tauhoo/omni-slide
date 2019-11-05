const express = require("express")
const app = express()

app.use("/", express.static("prove_files"))

app.listen(80)
