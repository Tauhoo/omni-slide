const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  port: process.env.port,
  database_config: {
    user: process.env.database_user,
    host: process.env.database_host,
    database: process.env.database_database,
    password: process.env.database_password,
    post: process.env.database_post,
  },
  log_location: process.env.log_location,
  session_secret: process.env.session_secret,
  client: process.env.client,
}
