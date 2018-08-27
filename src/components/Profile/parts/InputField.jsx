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

export const InputField = ({ value, name, editable, onChange }) => (
  <InputWrapper className="name">
    <b>{name}:</b>
    <Input disabled={!editable} onChange={onChange} value={value} />
  </InputWrapper>
)
