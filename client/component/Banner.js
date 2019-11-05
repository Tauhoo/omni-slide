import React from "react"
import styled from "styled-components"
import WebContainer from "./WebContainer"
import BannerImage from "../static/banner.svg"
const Container = styled.div`
  width: 100%;
  height: 500px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

const BannerImageStyled = styled(BannerImage)`
  font-size: 1000px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
`

export default () => (
  <Wrapper>
    <WebContainer>
      <Container></Container>
    </WebContainer>
  </Wrapper>
)
