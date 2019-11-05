import React, { Component } from "react"
import styled from "styled-components"
import Prism from "prismjs"

import "prismjs/themes/prism-okaidia.css"

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 0px;
  box-sizing: border-box;
  font-size: 18px;
  code {
    width: 100%;
    display: block;
    word-break: break-word;
    white-space: pre-wrap;
    margin: 0px;
    padding: 0px;
    @media (max-width: 450px) {
      font-size: 15px;
    }
  }

  pre {
    padding: 0px 20px;
  }
`

export default class extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    return (
      <Container>
        <pre className='line-numbers'>
          <code className='language-js'>{this.props.children}</code>
        </pre>
      </Container>
    )
  }
}
