import { post } from "./request"

export const register = data => post("register", data)

export const login = data => post("login", data)
