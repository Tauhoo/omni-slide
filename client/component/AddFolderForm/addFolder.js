import { create_folder } from "../../utils/api"
import { Error, Warning } from "../../utils/alert"

export default async function(name, callback) {
  try {
    const { status, type, detail } = await create_folder(name)

    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't add new folder", detail.text)
        this.setState({ loading: false })
        return
      }
      throw detail
    }
    callback()
  } catch (e) {
    console.log(e)
    this.setState({ loading: false })
    Error("error", "can't add folder")
  }
}
