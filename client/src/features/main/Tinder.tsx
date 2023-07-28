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

  const [showMatchNotification, setShowMatchNotification] = useState(false);

  useEffect(() => {
    api.loadPeople().then((data) => setPeople(data));
  }, []);

  const [lastDirection, setLastDirection] = useState<Direction | undefined>();

  const swiped = (direction: Direction, nameToDelete: string): void => {
    console.log('removing: ' + nameToDelete);

    setShowPerson(false);

    setShowMatchNotification(true);

    setLastDirection(direction);
    setPeople((prevPeople) => prevPeople.slice(1));
  };

  const outOfFrame = (name: string): void => setShowMatchNotification(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (lastDirection && people.length === 0) {
      navigate('/final');
    }
  }, [people, lastDirection]);

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
        <div className="cardContainer">
          <div className="card">
            {' '}
            <img
              src={`/photos/${people[0].profilePic}`}
              className={blurClass}
              alt=""
            />
          </div>

          <TinderCard
            className="swipe"
            key={people[0].name}
            onSwipe={(dir) => swiped(dir, people[0].name)}
            onCardLeftScreen={() => outOfFrame(people[0].name)}
          >
            <div className="card">
              <h3 className={blurClass}>{people[0].name}</h3>
              <p>{people[0].description}</p>
              <b>{people[0].details}</b>
            </div>
          </TinderCard>
          {/*           <div className="card" style={{ width: '100%' }}>
           
          </div> */}
        </div>
      ) : (
        <p>Киты плывут...</p>
      )}
      {showPerson ? (
        ''
      ) : (
        <button className="button" onClick={() => setShowPerson(true)}>
          SHOW
        </button>
      )}
      <MatchNotification show={showMatchNotification} />
    </Container>
  );
}

export default Tinder;
