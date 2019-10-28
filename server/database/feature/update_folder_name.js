const query = require("../query")

const update_folder_name = async (id, user_id, name) => {
  try {
    const data = await query(
      `
      UPDATE "folder"
      SET name = $3 
      WHERE id = $1 AND user_id = $2
      RETURNING id;
    `,
      [id, user_id, name]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = update_folder_name
