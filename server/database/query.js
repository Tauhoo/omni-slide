const pool = require("./pool")
const query = async (sql, arg) => {
  try {
    const client = await pool.connect()
    const result = await client.query(sql, arg)
    return { status: "success", result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = query
