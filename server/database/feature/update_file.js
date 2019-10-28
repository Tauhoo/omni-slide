const query = require("../query")

const update_file = async (id, folder_id, user_id, chunk) => {
  try {
    const data = await query(
      `
      UPDATE "file"
      SET data = $4 
      WHERE id = $1 AND 
      folder_id IN (
        SELECT id AS folder_id 
        FROM folder
        WHERE user_id = $3 AND id = $2
      )
      RETURNING id;
    `,
      [id, folder_id, user_id, chunk]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = update_file
