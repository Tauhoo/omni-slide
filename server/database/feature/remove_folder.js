const query = require("../query")

const remove_folder = async (id, user_id) => {
  try {
    const data = await query(
      `
      DELETE FROM "folder" 
      WHERE id = $1 AND user_id = $2
      RETURNING id;
    `,
      [id, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = remove_folder
