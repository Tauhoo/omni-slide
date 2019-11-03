import { post, get } from "./request"

export const register = data => post("register", data)

export const login = data => post("login", data)

export const login_session = () => post("login_session", {})

export const logout_session = () => post("logout", {})

export const get_folder_list = () => get("user/get_folder_list")

export const update_folder_name = (id, name) =>
  post("user/update_folder_name", { id, name })
