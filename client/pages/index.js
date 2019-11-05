import React from "react"
import Banner from "../component/Banner"
import WebContainer from "../component/WebContainer"
import CodeBlock, { Code } from "../component/CodeBlock"
import GoodPoint from "../component/GoodPoint"
import { Typography, Divider } from "antd"
const { Title, Paragraph } = Typography

const index = () => (
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
        <code style={{ whiteSpace: "pre-wrap" }}>{`
      import React from 'react' 
      import Controller from 'omni-slide-editor'

      export default ()=> <Controller></Controller> 
      `}</code>
      </CodeBlock>
      <br />
      <Divider />
      <br></br>
      <Typography>
        <Title>It's easier than you think</Title>
        <Paragraph>
          There is a lot of profit that you will get if you use our library or
          our service. Your slide will be taken care of from us. You can make
          your developer focus on importance task.
        </Paragraph>
      </Typography>
      <GoodPoint style={{ marginTop: "40px" }}></GoodPoint>
    </WebContainer>
  </>
)

export default index
