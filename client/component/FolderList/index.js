import React, { Component } from "react"
import styled from "styled-components"
import ContentContainer from "../ContentContainer"
import getFolderList from "./getFolderList"
import FolderItem from "../FolderItem"

const FolderListContainer = styled.div`
  display: grid;
  width: 100%;
`

export default class extends Component {
  state = { loading: true, error: false, error_message: "", folder_list: [] }

  constructor(props) {
    super(props)
    this.getFolderList = getFolderList.bind(this)
  }

  async componentDidMount() {
    await this.getFolderList()
  }

  render() {
    const { loading, error, error_message, folder_list } = this.state
    return (
      <ContentContainer
        loading={loading}
        error={error}
        error_message={error_message}
      >
        <FolderListContainer>
          {folder_list.map(({ name, id }) => (
            <FolderItem name={name} id={id} key={id} url=''></FolderItem>
          ))}
        </FolderListContainer>
      </ContentContainer>
    )
  }
}
