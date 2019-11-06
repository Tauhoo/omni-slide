import React from "react"
import styled from "styled-components"
import WebContainer from "./WebContainer"
const Container = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 700px) {
    padding: 20px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
`

const Image = styled.img`
  height: 300px;
  max-width: 100%;
`

export default () => (
  <Wrapper>
    <WebContainer>
      <Container>
        <Image src='/static/banner.svg'></Image>
      </Container>
    </WebContainer>
  </Wrapper>
)
