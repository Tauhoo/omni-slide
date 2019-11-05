import jwt from "jsonwebtoken"

export const get_file_token = (user_id, folder_id, file_id, key) =>
  jwt.sign(
    {
      user_id,
      folder_id,
      file_id,
      exp: Math.floor(Date.now() / 1000) + 3,
    },
    key
  )
