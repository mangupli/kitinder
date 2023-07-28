import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Gif from './Gif';

export default function Main(): JSX.Element {
  return (
    <Container>
      <div className="final-container">
        <Gif />
      </div>
    </Container>
  );
}
