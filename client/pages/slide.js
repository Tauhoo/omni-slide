import React, { Component } from "react"
import Editor from "../component/Editor"
import WebContainer from "../component/WebContainer"
import History from "../component/History"
import { Icon, Typography } from "antd"
import { get_file, update_file } from "../utils/api"
import { Success, Warning } from "../utils/alert"
import { throws } from "assert"

const { Title } = Typography

export default class extends Component {
  state = {
    data: {
      height: "1000px",
      width: "1000px",
      elementList: [],
    },
    loading: true,
  }

  updateData = async () => {
    try {
      const { status, result } = await get_file(this.folder_id, this.id)
      console.log(status, result)
      if (status === "error") return
      if (status === "warning") return

      this.setState({ ...result, loading: false })
    } catch (e) {
      console.log(e)
    }
  }

  async componentDidMount() {
    try {
      if (typeof window === "undefined") return
      const { href } = window.location
      const url = new URL(href)
      const id = +url.searchParams.get("id")
      const folder_id = +url.searchParams.get("folder_id")
      if (typeof id !== "number" || typeof folder_id !== "number") return
      this.id = id
      this.folder_id = folder_id
      await this.updateData()
    } catch (e) {
      console.log(e)
    }
  }

  onSave = async value => {
    try {
      const { status, type, detail } = await update_file({
        folder_id: this.folder_id,
        id: this.id,
        data: value,
      })
      console.log(status)

      if (status === "error") return Error("Error", "Can't update file")
      if (status === "warning") {
        if (type === "text") {
          Warning("Can't", detail)
        }
        throw detail
      }
      Success("Save slide success", "your slide is saved")
    } catch (e) {
      Error("Error", "Can't update file")
      console.log(e)
    }
  }

  render() {
    const { data, loading } = this.state
    return (
      <WebContainer>
        <br />
        <br />
        <History
          data={[
            [<Icon type='home' />, "/"],
            ["folders", "/folders"],
            ["files", `/file?id=${this.folder_id}`],
            ["slide", null],
          ]}
        ></History>
        <br></br>
        <Title>Slide</Title>
        {loading ? null : <Editor onChange={this.onSave} data={data}></Editor>}
      </WebContainer>
    )
  }
}
