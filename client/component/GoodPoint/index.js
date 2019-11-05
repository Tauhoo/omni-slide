import React from "react"
import styled from "styled-components"
import { Typography } from "antd"

const { Paragraph, Title } = Typography

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    > *:last-child {
      grid-column: 1/3;
      > div {
        width: 50%;
      }
    }
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    > *:last-child {
      grid-column: 1/2;
      > div {
        width: 100%;
      }
    }
  }
`

const Child = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const GoodPointContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  height: 200px;
  width: 200px;
`

const GoodItem = ({ title, children, logo }) => (
  <Child>
    <GoodPointContainer>
      <Image src={logo}></Image>
      <Typography style={{ padding: "10px", boxSizing: "border-box" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          {title}
        </Title>
        <Paragraph style={{ textAlign: "center" }}>{children}</Paragraph>
      </Typography>
    </GoodPointContainer>
  </Child>
)

export default props => (
  <Container {...props}>
    <GoodItem title='Code easier' logo='/static/goodPoint/coding.png'>
      You can make your slide display on your website easily.
    </GoodItem>
    <GoodItem title='Save time' logo='/static/goodPoint/time-management.png'>
      You can set up your project faster. Others library or framework isn't
      needed.
    </GoodItem>
    <GoodItem title='Save resource' logo='/static/goodPoint/folder.png'>
      You don't need to manage you storage. It save your server resource.
    </GoodItem>
  </Container>
)
