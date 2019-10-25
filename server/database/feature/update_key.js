const query = require("../query")

const login = async (new_token, user_id) => {
  try {
    const data = await query(
      `
        UPDATE "user"
        SET token = $1 
        WHERE id = $2
        RETURNING token;
    `,
      [new_token, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = login
