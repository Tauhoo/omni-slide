const default_state = {
  is_login: false,
}
export default (state = default_state, action) => {
  switch (action.type) {
    case "UPDATE_PROFILE":
      return { ...state, ...action.data, is_login: true }
    default:
      return state
  }
}
