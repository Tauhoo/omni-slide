import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  @media (max-width: 1100px) {
    padding: 0px 50px;
    box-sizing: border-box;
  }
  @media (max-width: 780px) {
    padding: 0px 25px;
  }
  @media (max-width: 450px) {
    padding: 0px 15px;
  }
`

export default Container
