const express = require("express")
const app = express()

app.use("/ice", express.static("prove_files"))

app.listen(80)
