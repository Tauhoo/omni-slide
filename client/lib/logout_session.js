import { logout_session } from "../utils/api"
export default async function() {
  try {
    const { status, detail } = await logout_session()
    if (status !== "success") return console.log(detail)
    this.props.remove_profile()
  } catch (e) {
    console.log(e)
  }
}
