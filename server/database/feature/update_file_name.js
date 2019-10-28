const query = require("../query")

const update_file_name = async (id, folder_id, user_id, name) => {
  try {
    const data = await query(
      `
      UPDATE "file"
      SET name = $4 
      WHERE id = $1 AND user_id = $3 AND folder_id = $2
      RETURNING id;
    `,
      [id, folder_id, user_id, name]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = update_file_name
