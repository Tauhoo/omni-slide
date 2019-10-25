const query = require("../query")

const create_file = async (id, folder_id) => {
  try {
    const data = await query(
      `
      WITH deletion as (
          DELETE FROM "file" WHERE id = $1
          RETURNING id
      )
      SELECT id, name, folder_id FROM "file" WHERE folder_id = $2;
    `,
      [id, folder_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = create_file
