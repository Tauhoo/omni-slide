import React from "react"
import WebContainer from "../component/WebContainer"
import History from "../component/History"
import FolderList from "../component/FolderList"
import { Typography, Icon } from "antd"

const { Title } = Typography

const index = () => (
  <>
    <WebContainer>
      <br />
      <br />
      <History
        data={[[<Icon type='home' />, "/"], ["folders", null]]}
      ></History>
      <br />
      <Title>Folders</Title>
      <FolderList></FolderList>
    </WebContainer>
  </>
)

export default index
