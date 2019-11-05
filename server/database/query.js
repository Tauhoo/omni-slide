const pool = require("./pool")
const query = async (sql, arg) => {
  try {
    const result = await pool.query(sql, arg)
    return { status: "success", result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = query
