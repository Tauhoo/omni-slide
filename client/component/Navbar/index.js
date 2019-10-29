import React from "react"
import styled from "styled-components"
import WebContainer from "../WebContainer"
const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #34495e;
`

const Wrapper = styled.div`
  width: 100%;
  background-color: #34495e;
  display: flex;
  justify-content: center;
`

export default () => (
  <Wrapper>
    <WebContainer>
      <Container></Container>
    </WebContainer>
  </Wrapper>
)
