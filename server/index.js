const express = require("express")
const session = require("express-session")
const { port, session_secret } = require("./config")
const login = require("./feature/login")
const register = require("./feature/register")
const login_session = require("./feature/login_session")
const { start_server } = require("./utilise/log")
const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.use(
  session({
    secret: session_secret,
    cookie: { user: null },
    saveUninitialized: false,
    resave: true,
  })
)

app.post("/login", ...login)
app.post("/register", ...register)
app.post("/login_session", ...login_session)

app.listen(port, start_server)
