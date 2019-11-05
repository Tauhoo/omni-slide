import React, { Component } from "react"
import styled from "styled-components"
import { Button, Input, Typography } from "antd"
import { get_file_token } from "../utils/token"
import connect from "../redux/connect"

const { Paragraph } = Typography

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 10px;
  align-items: center;
`

class GetFileToken extends Component {
  state = { token: "" }
  updateToken = () => {
    const { profile, file_id, folder_id } = this.props
    const { token, id, is_login } = profile
    console.log(this.props)

    if (is_login)
      this.setState({ token: get_file_token(id, folder_id, file_id, token) })
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps({ profile, file_id, folder_id }) {
    const { token, id, is_login } = profile
    if (is_login)
      this.setState({ token: get_file_token(id, folder_id, file_id, token) })
  }
  render() {
    return (
      <Container style={this.props.style}>
        <Paragraph
          ellipsis={{ rows: 1, expandable: false }}
          copyable
          style={{
            margin: "0px",
            borderWidth: "1px",
            borderStyle: "solid",
            padding: "3px 20px",
            boxSizing: "border-box",
            borderRadius: "3px",
            height: "100%",
            borderColor: "#95a5a6",
          }}
        >
          {this.state.token}
        </Paragraph>
        <Button type='primary' onClick={this.updateToken}>
          get token
        </Button>
      </Container>
    )
  }
}

export default connect(
  state => {
    return { profile: state.reducerProfile }
  },
  () => {},
  GetFileToken
)
