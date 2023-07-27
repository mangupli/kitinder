import React, { useEffect, useState } from 'react';
import Person from '../../types/Person';
import * as api from '../../api';
import { useNavigate } from 'react-router';

export default function Main(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    api.loadPeople().then((data) => setPeople(data));
  }, []);

  const handleClick = (): void => {
    if (current < people.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      navigate('/final');
    }
  };

  return (
    <div>
      {people.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{people[current].name}</p> :
          <button type="button" onClick={handleClick}>
            следующий
          </button>
        </>
      )}
    </div>
  );
}
