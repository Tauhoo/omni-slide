import { update_key } from "../../utils/api"
import { Error, Warning } from "../../utils/alert"
export default async function() {
  try {
    const { status, type, detail, result } = await update_key()
    if (status === "error") return
    if (status === "warning") {
      if (type === "text") {
        Warning("Can't update key", detail.text)
        this.setState({ loading: false })
        return
      }
      throw detail
    }
    this.setState({ loading: false }, () =>
      this.props.update_key(result.new_token)
    )
  } catch (e) {
    this.setState({ loading: false })
    console.log(e)
    Error("Error", "Can't update key")
  }
}
