import React from "react"
import styled from "styled-components"
import WebContainer from "./WebContainer"
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
`

const Image = styled.img`
  width: 100%;
`

export default () => (
  <Wrapper>
    <WebContainer>
      <Image src='/static/banner.svg'></Image>
    </WebContainer>
  </Wrapper>
)
