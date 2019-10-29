import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-radius: 10px;
  background-color: #2d3436;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
`

export default Container

export const Code = styled.span`
  color: ${({ color }) => color};
`
