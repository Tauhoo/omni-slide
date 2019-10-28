const express = require("express")
const session = require("express-session")

const { port, session_secret } = require("./config")
const login = require("./feature/login")
const register = require("./feature/register")
const login_session = require("./feature/login_session")
const logout = require("./feature/logout")
const update_key = require("./feature/update_key")

const create_file = require("./feature/create_file")
const create_folder = require("./feature/create_folder")

const remove_file = require("./feature/remove_file")
const remove_folder = require("./feature/remove_folder")

const update_file = require("./feature/update_file")
const update_file_name = require("./feature/update_file_name")
const update_folder_name = require("./feature/update_folder_name")

const get_file = require("./feature/get_file")
const get_folder_list = require("./feature/get_folder_list")
const get_folder_file = require("./feature/get_folder_file")
const get_file_by_token = require("./feature/get_file_by_token")

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

app.get("/get_file_by_token", ...get_file_by_token)

app.use("/user", ...filter_not_login)

app.post("/user/update_key", ...update_key)

app.post("/user/create_folder", ...create_folder)
app.post("/user/create_file", ...create_file)

app.post("/user/remove_file", ...remove_file)
app.post("/user/remove_folder", ...remove_folder)

app.post("/user/update_file", ...update_file)
app.post("/user/update_file_name", ...update_file_name)
app.post("/user/update_folder_name", ...update_folder_name)

app.get("/user/get_file/:folder_id/:file_id", ...get_file)
app.get("/user/get_folder_list", ...get_folder_list)
app.get("/user/get_folder_file/:folder_id", ...get_folder_file)

app.listen(port, start_server)
