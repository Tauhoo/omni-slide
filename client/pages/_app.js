import React from "react"
import App from "next/app"
import store from "../redux/store"
import styled from "styled-components"

import "antd/dist/antd.less"

import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
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
          <ContentWrapper>
            <Component {...pageProps} />
          </ContentWrapper>
          <br />
          <br />
          <br />
          <Footer></Footer>
        </Wrapper>
      </>
    )
  }
}

export default store(Main)
