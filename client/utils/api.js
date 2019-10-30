import { post } from "./request"

export const register = data => post("register", data)

export const login = data => post("login", data)

export const login_session = () => post("login_session", {})
