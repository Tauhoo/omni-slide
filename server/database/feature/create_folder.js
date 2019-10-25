const query = require("../query")

const create_folder = async (name, user_id) => {
  try {
    const data = await query(
      `
      INSERT INTO "folder" (name, user_id) VALUE ($1, $2)
      RETURNING name, id;
    `,
      [name, user_id]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = create_folder
