const query = require("../query")

const create_file = async (id, user_id) => {
  try {
    const data = await query(
      `
      WITH deletion as (
          DELETE FROM "folder" WHERE id = $1
          RETURNING id
      )
      SELECT id, name FROM "folder" WHERE user_id = $2;
    `,
      [id, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = create_file
