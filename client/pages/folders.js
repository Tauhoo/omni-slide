import React, { Component } from "react"
import WebContainer from "../component/WebContainer"
import History from "../component/History"
import FolderList from "../component/FolderList"
import UpdateKeyForm from "../component/UpdateKey"
import { Typography, Icon } from "antd"

const { Title } = Typography

export default () => (
  <>
    <WebContainer>
      <br />
      <br />
      <History
        data={[[<Icon type='home' />, "/"], ["folders", null]]}
      ></History>
      <br />
      <Title>Folders</Title>
      <UpdateKeyForm style={{ margin: "10px 0px" }}></UpdateKeyForm>
      <FolderList></FolderList>
    </WebContainer>
  </>
)
