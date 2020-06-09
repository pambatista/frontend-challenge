import React from 'react';
import { Container } from './style';
import notFound from '../../asserts/not-found.svg';

const NotFound = () => (
  <Container>
    <img src={notFound} alt="pagina não encontrada" />
    <h3>Página não encontrada</h3>
  </Container>
);
export default NotFound;
