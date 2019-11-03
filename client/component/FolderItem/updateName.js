import { Error, Warning } from "../../utils/alert"
import { update_folder_name } from "../../utils/api"
export default async function(name, id) {
  try {
    if (name.length > 30)
      return Warning("can't change name", "this name is longer than 30 letter")

    const { status, type, detail } = await update_folder_name(id, name)
    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't change folder name", detail.text)
        this.setState({ loading: false })
        return
      }
      throw detail
    }

    this.setState({ loading: false, edited: false })
    this.defaultName = name
  } catch (e) {
    console.log(e)
    this.setState({ loading: false })
    Error("error", "can't change folder name")
  }
}
