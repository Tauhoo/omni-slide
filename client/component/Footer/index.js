import React from "react"
import styled from "styled-components"
import WebContainer from "../WebContainer"
import Link from "next/link"
import { Icon } from "antd"

const Container = styled.div`
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 100%;
  background-color: #2d3436;
  display: flex;
  justify-content: center;
`
export default () => (
  <Wrapper>
    <WebContainer>
      <Container>
        <a target='_blank' href='https://github.com/Tauhoo/omni-slide-editor'>
          <Icon type='github' style={{ fontSize: "36px" }} />
        </a>
      </Container>
    </WebContainer>
  </Wrapper>
)
