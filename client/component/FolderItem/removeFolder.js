import { Error, Warning } from "../../utils/alert"
import { remove_folder } from "../../utils/api"
export default async function(id, callback) {
  try {
    const { status, detail } = await remove_folder(id)
    console.log(status)

    this.setState({ delete_loading: false }, callback)
    this.defaultName = name
  } catch (e) {
    console.log(e)
    this.setState({ delete_loading: false })
    Error("เกิดข้อผิดพลาด", "ไม่สามารถเปลี่ยนลบนี้โฟลเดอร์ได้")
  }
}
