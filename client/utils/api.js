import { post } from "./request"
import { get } from "http"

export const register = data => post("register", data)

export const login = data => post("login", data)

export const login_session = () => post("login_session", {})

export const logout_session = () => post("logout", {})

export const get_folder_list = () => get("user/get_folder_list")
