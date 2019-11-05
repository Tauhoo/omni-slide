import React, { Component } from "react"
import styled from "styled-components"
import { Input, Button } from "antd"
import connect from "../../redux/connect"
import { update_key } from "../../redux/action/profile_action"
import updateToken from "./updateToken"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 20px;
`

class UpdateKeyForm extends Component {
  key = ""
  state = { loading: false }

  constructor(props) {
    super(props)
    this.updateToken = updateToken
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ profile }) {
    const { is_login, token } = profile
    if (is_login) {
      this.key = token
      this.setState({})
    }
  }

  onSubmit = async () => {
    await this.updateToken(this.key)
  }

  render() {
    const { is_login, token } = this.props.profile
    const { loading } = this.state
    if (!is_login) return null
    return (
      <Container style={this.props.style}>
        <Input value={token}></Input>
        <Button
          type='primary'
          loading={loading}
          onClick={() => this.setState({ loading: true }, this.onSubmit)}
        >
          change key
        </Button>
      </Container>
    )
  }
}
export default connect(
  state => {
    return { profile: state.reducerProfile }
  },
  dispatch => {
    return { update_key: key => dispatch(update_key(key)) }
  },
  UpdateKeyForm
)
