const default_state = {
  folders: [],
  is_error: false,
}
export default (state = default_state, action) => {
  switch (action.type) {
    case "UPDATE_FOLDER_LIST":
      return { folders: action.folders }
    case "REPORT_ERROR":
      return { is_error: true, error: action.detail }
    default:
      return state
  }
}
