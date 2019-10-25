const Pool = require("pg")
const { database_config } = require("../config.js")

const pool = new Pool(database_config)

module.exports = pool
