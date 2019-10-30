import styled from "styled-components"

const Container = styled.button`
  height: 40px;
  background-color: transparent;
  border-width: 0px;
  transition: 0.3s;
  outline: none;
  color: #60a3bc;
  * {
    color: #60a3bc;
  }

  &:hover {
    color: #82ccdd;
    * {
      color: #82ccdd;
    }
    > div {
      opacity: 1;
    }
  }
`

const UnderLine = styled.div`
  top: 100%;
  height: 2px;
  background-color: #82ccdd;
  width: 100%;
  opacity: 0;
  transition: 0.3s;
  margin-top: 3px;
`

export default ({ onClick, children }) => (
  <Container onClick={onClick}>
    {children}
    <UnderLine></UnderLine>
  </Container>
)
