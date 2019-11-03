import React, { Component } from "react"
import styled from "styled-components"
import { Icon, Button } from "antd"
import addFolder from "./addFolder"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr ${({ edited }) =>
      edited ? "max-content" : ""};
  align-items: center;
  grid-gap: 20px;
`

const LogoContainer = styled.div`
  font-size: 50px;
`

const NameContainer = styled.div`
  box-sizing: border-box;
  word-break: break-word;
`

const Input = styled.input`
  width: 100%;
  border-style: solid;
  border-color: black;
  border-width: 0px;
  transition-duration: 0.3s;
  outline: none;
  &:active {
    border-width: 0px 0px 2px 0px;
  }
  &:hover {
    border-width: 0px 0px 2px 0px;
  }
`

export default class extends Component {
  state = { loading: false, edited: false }
  value = ""

  constructor(props) {
    super(props)
    this.addFolder = addFolder.bind(this)
  }

  onChange = ({ target }) => {
    this.value = target.value
    if (target.value !== "" && !this.state.edited) {
      this.setState({ edited: true })
    } else if (target.value === "" && this.state.edited) {
      this.setState({ edited: false })
    }
  }

  submit = async () => {
    await this.addFolder(this.value, this.props.onCreate)
  }

  render() {
    const { loading, edited } = this.state
    return (
      <Container edited={edited}>
        <LogoContainer>
          <Icon type='folder-add' />
        </LogoContainer>
        <NameContainer>
          <Input
            type='text'
            onChange={this.onChange}
            onChange={this.onChange}
            placeholder='new folder name'
          />
        </NameContainer>
        {edited ? (
          <Button
            type='primary'
            loading={loading}
            onClick={() => this.setState({ loading: false }, this.submit)}
          >
            add folder
          </Button>
        ) : null}
      </Container>
    )
  }
}
