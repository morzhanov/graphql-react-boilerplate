import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  display: flex;
  align-items: baseline;
  b {
    font-weight: bold;
    min-width: 64px;
  }
`

const Input = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #888;
  font-size: 24px;
  margin-left: 10px;
  width: 300px;
`

export class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
    this.props.onChange && this.props.onChange(e.target.value)
  }

  render() {
    const { value } = this.state
    const { name, editable } = this.props
    return (
      <InputWrapper className="name">
        <b>{name}:</b>
        <Input disabled={!editable} onChange={this.onChange} value={value} />
      </InputWrapper>
    )
  }
}
