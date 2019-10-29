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
    <GoodItem title='ice iceo' logo='/static/test.svg'>
      iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv
    </GoodItem>
    <GoodItem title='ice iceo' logo='/static/test.svg'>
      iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv
    </GoodItem>
    <GoodItem title='ice iceo' logo='/static/test.svg'>
      iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv iceposkdc sdpocks sdlcv
    </GoodItem>
  </Container>
)
