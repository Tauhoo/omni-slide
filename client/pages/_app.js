import React from "react"
import App, { Container } from "next/app"
import store from "../redux/store"
import styled from "styled-components"

import "antd/dist/antd.less"

import Navbar from "../component/Navbar"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

class Main extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Wrapper>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </Wrapper>
      </Container>
    )
  }
}

export default store(Main)
