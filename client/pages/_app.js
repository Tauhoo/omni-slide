import React from "react"
import App from "next/app"
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
      <>
        <Wrapper>
          <Navbar></Navbar>
          <Component {...pageProps} />
        </Wrapper>
      </>
    )
  }
}

export default store(Main)
