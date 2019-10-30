import { get_folder_list } from "../utils/api"
import { throws } from "assert"
export default async function() {
  try {
    const { status, result, detail, type } = await get_folder_list()
    if (status === "error")
      throws({
        type: "server",
        detail: "error can't fetch folder list from server",
      })

    if (status === "warning") {
      if (type === "text") throws({ type: "server", detail: detail.text })
      throws({ detail: "data is invalid" })
    }

    this.props.update_folder_list(result)
  } catch (e) {
    console.log(e)
    if (e.type === "server") return this.props.report_error(e.detail)
    this.props.report_error("error can't fetch folder list from server")
  }
}
