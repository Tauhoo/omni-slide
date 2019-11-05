import { post, get } from "./request"

export const register = data => post("register", data)

export const login = data => post("login", data)

export const login_session = () => post("login_session", {})

export const logout_session = () => post("logout", {})

export const get_folder_list = () => get("user/get_folder_list")

export const update_folder_name = (id, name) =>
  post("user/update_folder_name", { id, name })

export const create_folder = name => post("user/create_folder", { name })

export const remove_folder = id => post("user/remove_folder", { id })

export const get_file_list = id => get(`user/get_folder_file/${id}`)

export const remove_file = (folder_id, file_id) =>
  post("user/remove_file", { folder_id, id: file_id })

export const create_file = (folder_id, name) =>
  post("user/create_file", { folder_id, name })

export const update_file_name = (id, folder_id, name) =>
  post("user/update_file_name", { id, folder_id, name })

export const get_file = (folder_id, file_id) =>
  get(`user/get_file/${folder_id}/${file_id}`)

export const update_file = data => post("user/update_file", data)

export const update_key = () => post("user/update_key", {})
