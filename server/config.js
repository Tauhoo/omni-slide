const production_config = require("./utilise/evironment")

module.exports =
  process.env.NODE_ENV === "production"
    ? production_config
    : {
        port: 3000,
        database_config: {
          user: "postgres",
          host: "0.0.0.0",
          database: "omni_slide",
          password: "Kd95d$NP9=w%A_M6",
          post: "5432",
        },
        log_location: "./logs/server.log",
        session_secret: "UWSSRhG)apS,4bH",
        client: "http://localhost:8080",
      }
