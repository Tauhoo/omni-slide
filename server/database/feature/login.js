const query = require("../query")

const login = async email => {
  try {
    const data = await query('SELECT * FROM "user" WHERE email = $1;', [email])
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = login
