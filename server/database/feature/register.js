const query = require("../query")

const register = async (username, password, email, token) => {
  try {
    const data = await query(
      `
        INSERT INTO "user" (username, password, email, token) 
        SELECT $1, $2, CAST($3 AS VARCHAR), $4
        WHERE NOT EXISTS (
          SELECT 1 
          FROM "user" 
          WHERE email = $3
        )
        RETURNING id, username, email, token, id;
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
