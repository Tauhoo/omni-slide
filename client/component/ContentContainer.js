import React from "react"
import styled from "styled-components"
import { Icon } from "antd"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default ({ loading, children }) => (
  <Container>{loading ? <Icon type='loading' /> : children}</Container>
)
