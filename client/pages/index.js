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
        <Title>Why Omni-Slide?</Title>
        <Paragraph>
          For a website owner, we provide you our library to help you by keep
          your files in our lovely database and save your time from creating a
          new library. For a user, we provide you our proud secure sharing. You
          can send the token with your slide's link to your clients or friends
          and they can see your files without logging in.
        </Paragraph>
      </Typography>
      <br></br>
      <Divider />
      <br />
      <Typography>
        <Title>Quick guide</Title>
        <Paragraph>First install our library via Npm or Yarn.</Paragraph>
        <CodeBlock>
          {`
      npm install omni-slide-editor
      yarn add omni-slide-editor
      `}
        </CodeBlock>
        <br></br>
        <Paragraph>import our library to ypur project</Paragraph>
        <CodeBlock>
          {`
      import React from 'react' 
      import Controller from 'omni-slide-editor'

      export default ()=> <Controller></Controller> 
      `}
        </CodeBlock>
      </Typography>
      <br />
      <Divider />
      <br></br>
      <Typography>
        <Title>What profit you will receive?</Title>
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
