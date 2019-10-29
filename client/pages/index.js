import React from "react"
import styled from "styled-components"
import Banner from "../component/Banner"
import WebContainer from "../component/WebContainer"
import CodeBlock, { Code } from "../component/CodeBlock"
import GoodPoint from "../component/GoodPoint"
import { Typography, Divider } from "antd"

const { Title, Paragraph } = Typography

export default () => (
  <>
    <Banner></Banner>
    <WebContainer>
      <Typography style={{ marginTop: "48px" }}>
        <Title>It's easier than you think</Title>
        <Paragraph>
          If you can build a website, you can build a desktop app. Electron is a
          framework for creating native applications with web technologies like
          JavaScript, HTML, and CSS. It takes care of the hard parts so you can
          focus on the core of your application.
        </Paragraph>
      </Typography>
      <br></br>
      <Divider />
      <br />
      <Typography>
        <Title>It's easier than you think</Title>
        <Paragraph>
          If you can build a website, you can build a desktop app. Electron is a
          framework for creating native applications with web technologies like
          JavaScript, HTML, and CSS. It takes care of the hard parts so you can
          focus on the core of your application.
        </Paragraph>
      </Typography>
      <br></br>
      <CodeBlock>
        <Code color='white'>import React from 'react'</Code>
      </CodeBlock>
      <br />
      <Divider />
      <br></br>
      <Typography>
        <Title>It's easier than you think</Title>
        <Paragraph>
          If you can build a website, you can build a desktop app. Electron is a
          framework for creating native applications with web technologies like
          JavaScript, HTML, and CSS. It takes care of the hard parts so you can
          focus on the core of your application.
        </Paragraph>
      </Typography>
      <GoodPoint></GoodPoint>
    </WebContainer>
  </>
)
