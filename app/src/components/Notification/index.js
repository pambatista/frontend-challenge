import React from 'react'
import { Container } from './style'

const Notification = (props) => {
  if (!!!props.text) {
    return <Container />
  } else {
    return (
      <Container error={props.text}>
        {
          props.text
        }
      </Container>
    )
  }
}

export default Notification
