import { Error, Warning } from "../../utils/alert"
import { remove_file } from "../../utils/api"
export default async function(folder_id, id, callback) {
  try {
    const { status, type, detail } = await remove_file(folder_id, id)
    console.log(status, type, detail)

    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't delete file", detail.text)
        this.setState({ delete_loading: false })
        return
      }
      throw detail
    }

    this.setState({ delete_loading: false }, callback)
    this.defaultName = name
  } catch (e) {
    console.log(e)
    this.setState({ delete_loading: false })
    Error("error", "can't delete this file")
  }
}
