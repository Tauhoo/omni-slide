const query = require("../query")

const get_file = async (id, user_id) => {
  try {
    const data = await query(
      `
    SELECT id, folder_id, name, data
    FROM "file" 
    WHERE folder_id = $1 AND user_id = $2
    ORDER BY id;
    `,
      [id, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = get_file
