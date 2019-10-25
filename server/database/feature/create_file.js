const query = require("../query")
const { default_slide } = require("../../utilise/slide")

const create_file = async (name, folder_id) => {
  try {
    const data = await query(
      `
      WITH insertion as (
          INSERT INTO "file" (name, folder_id, data) VALUE ($1, $2, $3) 
          RETURNING id
      )
      SELECT id, name FROM "file" WHERE folder_id = $2;
    `,
      [name, folder_id, default_slide]
    )
    if (data.status === "error") throw data.detail
    return { status: "success", result: data.result }
  } catch (detail) {
    return { status: "error", detail }
  }
}

module.exports = create_file
