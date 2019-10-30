import React from "react"
import styled from "styled-components"
import WebContainer from "../WebContainer"
import RegisterButton from "../RegisterForm"
import LoginButton from "../LoginForm"
import connect from "../../redux/connect"
import Button from "../MenuButton"

import Link from "next/link"

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #34495e;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Wrapper = styled.div`
  width: 100%;
  background-color: #34495e;
  display: flex;
  justify-content: center;
  border-style: solid;
  border-bottom-color: #1a1b23;
  border-width: 0px 0px 1px 0px;
`

const index = ({ profile }) => {
  const { is_login, username } = profile

  return (
    <Wrapper>
      <WebContainer>
        <Container>
          {is_login ? (
            <>
              <Button>
                <Link prefetch href='/folders'>
                  <a>my folders</a>
                </Link>
              </Button>
            </>
          ) : (
            <>
              <RegisterButton></RegisterButton>
              <LoginButton></LoginButton>
            </>
          )}
        </Container>
      </WebContainer>
    </Wrapper>
  )
}

export default connect(
  state => ({ profile: state.reducerProfile }),
  () => ({}),
  index
)
