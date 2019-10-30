export const report_error = error => ({
  type: "REPORT_ERROR",
  error,
})

export const update_folder_list = folders => ({
  type: "UPDATE_FOLDER_LIST",
  folders,
})
