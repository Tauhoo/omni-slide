import React from "react"
import WebContainer from "../component/WebContainer"
import History from "../component/History"
import { Typography, Divider, Icon } from "antd"
import {} from "../redux/action/profile_action"

const { Title, Paragraph } = Typography

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
    </WebContainer>
  </>
)

export default index
