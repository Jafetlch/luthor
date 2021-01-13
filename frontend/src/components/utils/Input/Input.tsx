import React, { useState } from 'react'
import styled from 'styled-components'

const FormControl = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  input:focus + label span,
  input:valid + label span {
    transform: translate(14px, -6px) scale(0.75);
  }
`
const Label = styled.label`
  position: absolute;
  transform: translate(14px, 20px) scale(1);
  pointer-events: none;
`
const Input = styled.input`
  padding: 18px 14px;
  transition: 0.1s ease-in;
`

const InputControl = styled.div``
const Fieldset = styled.fieldset``
const Legend = styled.legend``

export const InputText: React.FC<{ value: string }> = ({ value }) => {
  return (
    <FormControl>
      <Input />
      <Label>{value}</Label>
    </FormControl>
  )
}
