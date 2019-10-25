const express = require("express")
const session = require("express-session")

const { port, session_secret } = require("./config")
const login = require("./feature/login")
const register = require("./feature/register")
const login_session = require("./feature/login_session")
const logout = require("./feature/logout")
const update_key = require("./feature/update_key")

const filter_not_login = require("./feature/filter_not_login")
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
app.post("/logout", ...logout)

app.use("/user", ...filter_not_login)

app.post("/user/update_key", ...update_key)

app.listen(port, start_server)
