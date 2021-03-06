const query = require("../query")

const get_folder_list = async user_id => {
  try {
    const data = await query(
      `
    SELECT id, name 
    FROM "folder" 
    WHERE user_id = $1
    ORDER BY id;
    `,
      [user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = get_folder_list
