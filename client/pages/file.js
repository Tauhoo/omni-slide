import React from "react"
import styled from "styled-components"
import WebContainer from "../component/WebContainer"
import History from "../component/History"
import FileList from "../component/FileList"
import { Typography, Icon } from "antd"
const { Title } = Typography

const file = () => (
  <>
    <WebContainer>
      <br />
      <br />
      <History
        data={[
          [<Icon type='home' />, "/"],
          ["folders", "/folders"],
          ["file", null],
        ]}
      ></History>
      <br />
      <Title>Files</Title>
      <FileList></FileList>
    </WebContainer>
  </>
)

export default file
