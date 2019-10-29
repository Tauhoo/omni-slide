import { post } from "./request"
export const register = data => post("register", data)
