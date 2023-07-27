import React, { useEffect, useState } from 'react';
import Person from '../../types/Person';
import * as api from '../../api';
import UpdateForm from './UpdateForm';
import Container from 'react-bootstrap/Container';

export default function UpdatePage(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    api.loadPeople().then((data) => setPeople(data));
  }, []);

  return (
    <Container>
      {people.length === 0 ? (
        <p>Киты плывут....</p>
      ) : (
        <>
          {people.map((p) => (
            <UpdateForm person={p} />
          ))}
        </>
      )}
    </Container>
  );
}
