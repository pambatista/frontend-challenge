import React from 'react'
import { Container } from './style'
import notFound from '../../asserts/not-found.svg'

const NotFound = () => (
  <Container>
    <img src={notFound} alt="pagina não encontrada" />
    <h1>Página não encontrada</h1>
  </Container>
)
export default NotFound
