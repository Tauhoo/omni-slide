import { get_folder_list } from "../../utils/api"
export default async function() {
  try {
    const { status, result, type, detail } = await get_folder_list()
    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't fecth folders data", detail.text)
        this.setState({ loading: false })
        return
      }
      throw detail
    }
    this.setState({ folder_list: result, error: false, loading: false })
  } catch (e) {
    console.log(e)
    this.setState({ loading: false, error: true })
  }
}
