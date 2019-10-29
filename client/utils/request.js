import { server_src } from "../config"
export const post = (route, data) =>
  fetch(server_src + "/" + route, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(res => res.json())

export const get = route =>
  fetch(server_src + "/" + route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(res => res.json())
