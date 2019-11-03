import { get_folder_list } from "../../utils/api"
export default async function() {
  try {
    const { status, result, detail } = await get_folder_list()
    this.setState({ folder_list: result, error: false, loading: false })
  } catch (e) {
    console.log(e)
    this.setState({ loading: false, error: true })
  }
}
