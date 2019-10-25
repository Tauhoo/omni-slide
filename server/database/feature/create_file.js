const query = require("../query")
const { default_slide } = require("../../utilise/slide")

const create_file = async (name, folder_id, user_id) => {
  try {
    const data = await query(
      `
      INSERT INTO "file" (folder_id, name, data)
      SELECT id AS folder_id, $1 AS name, $4 AS data
      FROM "folder"
      WHERE id = $2 AND user_id = $3
      LIMIT 1
      RETURNING id;
    `,
      [name, folder_id, user_id, default_slide]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = create_file
