import React from "react"
import App from "next/app"
import styled from "styled-components"

import "antd/dist/antd.less"

import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import connect from "../redux/connect"
import { update_profile } from "../redux/action/profile_action"

import login_session from "../lib/login_session"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: max-content auto max-content;
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`

class Main extends App {
  constructor(props) {
    super(props)
    this.login_session = login_session.bind(this)
  }
  async componentDidMount() {
    await this.login_session()
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Wrapper>
        <Navbar></Navbar>
        <ContentWrapper>
          <Component {...pageProps} />
        </ContentWrapper>
        <div>
          <br />
          <br />
          <br />
          <Footer></Footer>
        </div>
      </Wrapper>
    )
  }
}

export default connect(
  () => ({}),
  dispatch => ({ update_profile: data => dispatch(update_profile(data)) }),
  Main
)
