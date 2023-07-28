import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Gif from './Gif';

export default function Main(): JSX.Element {
  return (
    <Container>
      <div className="final-container">
        <h1>Поздравляем наших китов!</h1>
        <Gif />
      </div>
    </Container>
  );
}
