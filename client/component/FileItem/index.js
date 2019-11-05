import React, { Component } from "react"
import styled from "styled-components"
import { Icon, Button } from "antd"
import updateName from "./updateName"
import removeFile from "./removeFile"

import Link from "next/link"

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr ${({ edited }) =>
      edited ? "max-content max-content" : "max-content"};
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
  state = {
    edited: false,
    loading: false,
    delete_loading: false,
  }
  defaultName = this.props.name
  name = this.props.name

  constructor(props) {
    super(props)
    this.updateName = updateName.bind(this)
    this.removeFile = removeFile.bind(this)
  }

  submit = async () => {
    await this.updateName(this.name, this.props.id, this.props.folder_id)
  }

  delete = async () => {
    await this.removeFile(
      this.props.folder_id,
      this.props.id,
      this.props.onDelete
    )
  }

  onChange = ({ target }) => {
    this.name = target.value
    if (this.name !== this.defaultName && !this.state.edited) {
      this.setState({ edited: true })
    } else if (this.name === this.defaultName && this.state.edited) {
      this.setState({ edited: false })
    }
  }

  render() {
    const { edited, loading, delete_loading } = this.state
    const { name, url } = this.props
    return (
      <Container edited={edited}>
        <Link href={url}>
          <a>
            <LogoContainer>
              <Icon type='file-image' />
            </LogoContainer>
          </a>
        </Link>
        <NameContainer>
          <Input
            type='text'
            defaultValue={name}
            onChange={this.onChange}
            placeholder='folder name'
          />
        </NameContainer>
        {edited ? (
          <Button
            type='primary'
            loading={loading}
            onClick={() => this.setState({ loading: true }, this.submit)}
          >
            update name
          </Button>
        ) : null}
        <Button
          type='danger'
          loading={delete_loading}
          onClick={() => this.setState({ delete_loading: true }, this.delete)}
        >
          delete
        </Button>
      </Container>
    )
  }
}
