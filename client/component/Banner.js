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

  @media (max-width: 650px) {
    height: 400px;
  }

  @media (max-width: 500px) {
    height: 300px;
  }
`

const BannerImageStyled = styled(BannerImage)`
  font-size: 550px;
  @media (max-width: 650px) {
    font-size: 400px;
  }
  @media (max-width: 500px) {
    font-size: 300px;
  }
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
      <Container>
        <BannerImageStyled></BannerImageStyled>
      </Container>
    </WebContainer>
  </Wrapper>
)
