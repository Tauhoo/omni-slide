import { login_session } from "../utils/api"
export default async function() {
  try {
    const { status, result, detail } = await login_session()
    if (status !== "success") return console.log(detail)
    this.props.update_profile(result)
  } catch (e) {
    console.log(e)
  }
}
