const query = require("../query")

const register = async (username, password, email, token) => {
  try {
    const data = await query(
      `
        INSERT INTO "user" (username, password, email, token) VALUE ($1, $2, $3, $4)
        `,
      [username, password, email, token]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = register
