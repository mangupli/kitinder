import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import * as api from '../../api';
import Person from '../../types/Person';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MatchNotification from './MatchNotification';

type Direction = 'up' | 'down' | 'right' | 'left';

function Tinder(): JSX.Element {
  const [people, setPeople] = useState<Person[]>([]);
  const [showPerson, setShowPerson] = useState(false);
  const [final, setFinal] = useState(false);

  const [showMatchNotification, setShowMatchNotification] = useState(false);

  useEffect(() => {
    api.loadPeople().then((data) => setPeople(data));
    setFinal(true);
  }, []);

  const handleLike = (): void => {
    setShowPerson(false);
    setShowMatchNotification(true);
    setPeople((prevPeople) => prevPeople.slice(1));
    setTimeout(() => setShowMatchNotification(false), 500);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (final && people.length === 0) {
      navigate('/final');
    }
  }, [people]);

  const blurClass = showPerson ? '' : 'blur';

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />

      {people.length > 0 ? (
        <>
          <div className="cardContainer">
            <div className="card">
              {' '}
              <img
                src={`/photos/${people[0].profilePic}`}
                className={blurClass}
                alt=""
              />
              <div className="card-content">
                <h3 className={blurClass}>{people[0].name}</h3>
                <p>{people[0].description}</p>
                <b>{people[0].details}</b>
              </div>
            </div>
          </div>
          <button className="button button-like" onClick={handleLike}>
            LIKE
          </button>
        </>
      ) : (
        <p>Киты ещё плывут...</p>
      )}

      <button className="button" onClick={() => setShowPerson(true)}>
        SHOW
      </button>

      <MatchNotification show={showMatchNotification} />
    </Container>
  );
}

export default Tinder;
