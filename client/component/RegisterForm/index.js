import React, { Component } from "react"
import styled from "styled-components"
import { Modal } from "antd"
import MenuButton from "../MenuButton"
import { Icon, Input, Button, Alert } from "antd"
import connect from "../../redux/connect"
import { update_profile } from "../../redux/action/profile_action"
import { register_handle } from "./handle"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`

class RegisterForm extends Component {
  state = { visible: false, loading: false, is_warning: false, warning: "" }
  data = { username: "", password: "", re_password: "", email: "" }
  constructor(props) {
    super(props)
    this.register_handle = register_handle.bind(this)
  }
  render() {
    const { visible, warning, is_warning, loading } = this.state
    return (
      <>
        <MenuButton onClick={() => this.setState({ visible: !visible })}>
          register
        </MenuButton>
        <Modal
          title='Register'
          visible={visible}
          onCancel={() => this.setState({ visible: false })}
          footer={[
            <Button
              type='primary'
              onClick={() =>
                this.setState({ loading: true }, () =>
                  this.register_handle(this.data)
                )
              }
              loading={loading}
              key='ok'
            >
              Submit
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
              prefix={<Icon type='mail' style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder='Email'
              onChange={({ target }) => (this.data.email = target.value)}
            />
            <Input
              prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder='Username'
              onChange={({ target }) => (this.data.username = target.value)}
            />
            <Input
              prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
              type='password'
              placeholder='Password'
              onChange={({ target }) => (this.data.password = target.value)}
            />
            <Input
              prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
              type='password'
              placeholder='Re-password'
              onChange={({ target }) => (this.data.re_password = target.value)}
            />
            {is_warning ? (
              <Alert description={warning} type='error'></Alert>
            ) : null}
          </Container>
        </Modal>
      </>
    )
  }
}

export default connect(
  state => ({
    profile: state,
  }),
  dispatch => ({
    update_profile: data => dispatch(update_profile(data)),
  }),
  RegisterForm
)
