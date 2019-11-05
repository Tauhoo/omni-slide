export const update_profile = data => ({
  type: "UPDATE_PROFILE",
  data,
})

export const remove_profile = () => ({
  type: "REMOVE_PROFILE",
})

export const update_key = key => ({
  type: "UPDATE_KEY",
  key,
})
