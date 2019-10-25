const config = require("./config")
const express = require("express")
const login = require("./feature/login")
const { start_server } = require("./utilise/log")
const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.post("/login", ...login)

app.listen(config.port, start_server)
