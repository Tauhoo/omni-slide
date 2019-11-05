import React, { Component } from "react"
import styled from "styled-components"
import WebContainer from "../WebContainer"
import RegisterButton from "../RegisterForm"
import LoginButton from "../LoginForm"
import connect from "../../redux/connect"
import Button from "../MenuButton"
import Logo from "../../static/logo.svg"

import { remove_profile } from "../../redux/action/profile_action"

import logout_session from "../../lib/logout_session"

import Link from "next/link"

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #34495e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
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

const LogoStyled = styled(Logo)`
  font-size: 40px;
`

class index extends Component {
  constructor(props) {
    super(props)
    this.logout_session = logout_session.bind(this)
  }
  render() {
    const { is_login } = this.props.profile

    return (
      <Wrapper>
        <WebContainer>
          <Container>
            <Link href='/'>
              <a>
                <LogoStyled></LogoStyled>
              </a>
            </Link>
            <div>
              {is_login ? (
                <>
                  <Button>
                    <Link href='/folders'>
                      <a>my folders</a>
                    </Link>
                  </Button>
                  <Button onClick={() => this.logout_session()}>logout</Button>
                </>
              ) : (
                <>
                  <RegisterButton></RegisterButton>
                  <LoginButton></LoginButton>
                </>
              )}
            </div>
          </Container>
        </WebContainer>
      </Wrapper>
    )
  }
}

export default connect(
  state => ({ profile: state.reducerProfile }),
  dispatch => ({
    remove_profile: () => dispatch(remove_profile()),
  }),
  index
)
