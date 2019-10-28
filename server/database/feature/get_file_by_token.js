const query = require("../query")

const get_file = async (id, folder_id, user_id) => {
  try {
    const data = await query(
      `
    SELECT "file".id, "file".folder_id, "file".name, "file".data, "user".token AS key
    FROM "file", "user"
    WHERE 
    "file".id = $1 AND 
    "file".folder_id = $2 AND 
    "file".user_id = $3 AND 
    "file".user_id = "user".id
    LIMIT 1;
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
