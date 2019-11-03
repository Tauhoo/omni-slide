import React, { Component } from "react"
import ContentContainer from "../ContentContainer"
import getFileList from "./getFileList"
import FileItem from "../FileItem"
import AddFileForm from "../AddFileForm"
import styled from "styled-components"

const FileListContainer = styled.div`
  display: grid;
  width: 100%;
`

export default class extends Component {
  state = { error: false, loading: true, file_list: [], error_message: "" }
  id = 0
  constructor(props) {
    super(props)
    this.getFileList = getFileList.bind(this)
  }

  async componentDidMount() {
    try {
      if (typeof window === "undefined") return
      const { href } = window.location
      const url = new URL(href)
      const id = +url.searchParams.get("id")
      if (typeof id !== "number") return
      this.id = id
      await this.getFileList(id)
    } catch (e) {
      console.log(e)
    }
  }

  onDelete = async () => {
    await this.getFileList(this.id)
  }

  onCreate = async () => {
    await this.getFileList(this.id)
  }

  render() {
    const { error, loading, file_list, error_message } = this.state

    return (
      <ContentContainer
        loading={loading}
        error={error}
        error_message={error_message}
      >
        <FileListContainer>
          {file_list.map(({ id, folder_id, name }) => (
            <FileItem
              folder_id={folder_id}
              name={name}
              id={id}
              key={id}
              url=''
              onDelete={this.onDelete}
            ></FileItem>
          ))}
          <AddFileForm id={this.id} onCreate={this.onCreate}></AddFileForm>
        </FileListContainer>
      </ContentContainer>
    )
  }
}
