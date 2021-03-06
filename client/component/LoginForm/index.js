import React, { Component } from "react"
import styled from "styled-components"
import { Modal } from "antd"
import MenuButton from "../MenuButton"
import { Icon, Input, Button, Alert, Checkbox } from "antd"
import { update_profile } from "../../redux/action/profile_action"
import { login_handle } from "./handle"

import connect from "../../redux/connect"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`
const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 10px;
`

class LoginForm extends Component {
  state = { visible: false, loading: false, is_warning: false, warning: "" }
  data = { password: "", email: "" }
  is_remember = false

  constructor(props) {
    super(props)
    this.login_handle = login_handle.bind(this)
  }

  componentDidMount() {
    if (typeof window === "undefined") return
    const data = localStorage.getItem("login")
    if (!data) return

    this.data = JSON.parse(data)
    this.setState({})
  }

  render() {
    const { visible, warning, is_warning, loading } = this.state
    return (
      <>
        <MenuButton onClick={() => this.setState({ visible: !visible })}>
          login
        </MenuButton>
        <Modal
          title='login'
          visible={visible}
          onCancel={() => this.setState({ visible: false })}
          footer={[
            <Button
              type='primary'
              onClick={() =>
                this.setState({ loading: true }, () =>
                  this.login_handle(this.data)
                )
              }
              key='ok'
              loading={loading}
            >
              Login
            </Button>,
            <Button
              key='cancel'
              onClick={() => this.setState({ visible: true })}
            >
              Cancel
            </Button>,
          ]}
        >
          <Container>
            <Input
              defaultValue={this.data.email}
              prefix={<Icon type='mail' style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder='Email'
              onChange={({ target }) => (this.data.email = target.value)}
            />
            <Input
              defaultValue={this.data.password}
              prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
              type='password'
              placeholder='Password'
              onChange={({ target }) => (this.data.password = target.value)}
            />
            {is_warning ? (
              <Alert description={warning} type='error'></Alert>
            ) : null}
            <CheckboxContainer>
              <Checkbox
                onChange={({ target }) => (this.is_remember = target.checked)}
                defaultChecked={this.is_remember}
              ></Checkbox>
              <p>remember this password</p>
            </CheckboxContainer>
          </Container>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.reducerProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update_profile: payload => dispatch(update_profile(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  LoginForm
)
