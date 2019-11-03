import { create_folder } from "../../utils/api"
import { Error } from "../../utils/alert"

export default async function(name, callback) {
  try {
    const { status } = await create_folder(name)
    callback()
  } catch (e) {
    this.setState({ loading: false })
    Error("เกิดข้อผิดพลาด", "ไม่สามารถเพิ่มโฟลเดอร์ได้")
  }
}
