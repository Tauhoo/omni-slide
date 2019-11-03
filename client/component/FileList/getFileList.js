import { get_file_list } from "../../utils/api"
export default async function(id) {
  try {
    const { status, result, type, detail } = await get_file_list(id)
    if (status === "error") throw detail
    if (status === "warning") {
      if (type === "text") {
        Warning("can't fecth files data", detail.text)
        this.setState({ loading: false })
        return
      }
      throw detail
    }
    this.setState({ file_list: result, error: false, loading: false })
  } catch (e) {
    console.log(e)
    this.setState({ loading: false, error: true })
  }
}
