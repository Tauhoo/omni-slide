import { Error, Warning } from "../../utils/alert"
import { remove_folder } from "../../utils/api"
export default async function(id, callback) {
  try {
    const { status, type, detail } = await remove_folder(id)
    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't delete folder", detail.text)
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
    Error("error", "can't delete this folder")
  }
}
