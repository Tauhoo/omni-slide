const query = require("../query")

const get_file = async (id, folder_id, user_id) => {
  try {
    const data = await query(
      `
    SELECT id, folder_id, name, data
    FROM "file" 
    WHERE id = $1 AND folder_id = $2 AND user_id = $3;
    `,
      [id, folder_id, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = get_file
