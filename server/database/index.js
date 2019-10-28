const login = require("./feature/login")
const register = require("./feature/register")
const update_key = require("./feature/update_key")
const create_folder = require("./feature/create_folder")
const create_file = require("./feature/create_file")
const remove_folder = require("./feature/remove_folder")
const remove_file = require("./feature/remove_file")
const update_file = require("./feature/update_file")
const update_file_name = require("./feature/update_file_name")
const update_folder_name = require("./feature/update_folder_name")

module.exports = {
  login,
  register,
  update_key,
  create_folder,
  create_file,
  remove_folder,
  remove_file,
  update_file,
  update_file_name,
  update_folder_name,
}
