const express = require("express")
const app = express()

app.use('/', express.static(__dirname + "/prove_files"))

app.listen(80)
