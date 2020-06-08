import React from 'react'

import { Container } from './styles'


const Input = (props) => (
  <Container>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.handleInput}
    />
  </Container>
)

export default Input
