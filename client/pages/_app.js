import React from "react"
import App from "next/app"
import store from "../redux/store"
import "antd/dist/antd.less"

class Main extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default store(Main)
