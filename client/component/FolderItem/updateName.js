import { Error, Warning } from "../../utils/alert"
import { update_folder_name } from "../../utils/api"
export default async function(name, id) {
  try {
    if (name.length > 30)
      return Warning("ไม่สามารถตั้งชื่อนี้ได้", "ชื่อนี้ยาวเกิน 30 ตัวอักษร")

    const { status, detail } = await update_folder_name(id, name)
    console.log(status)

    this.setState({ loading: false, edited: false })
    this.defaultName = name
  } catch (e) {
    console.log(e)
    this.setState({ loading: false })
    Error("เกิดข้อผิดพลาด", "ไม่สามารถเปลี่ยนชื่อโฟลเดอร์ได้")
  }
}
