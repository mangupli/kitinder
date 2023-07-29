import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Gif from './Gif';

export default function Main(): JSX.Element {
  return (
    <Container>
      <div className="final-container">
        <Gif />
      </div>
      <div className="footer">
        *Сервис был разработан забавы ради, чтобы поздравить группу Китов с
        выпускным в Эльбрусе. Тексты были написаны преподавателями Артёмом и
        Лизой с использованием ChatGPT.
      </div>
    </Container>
  );
}
