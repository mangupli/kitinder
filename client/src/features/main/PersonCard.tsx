/* // PersonCard.tsx

import React, { useState } from 'react';
import SwipeCard from 'react-swipe-card';
import './PersonCard.css'; 
import Person from '../../types/Person';


type PersonCardProps = {
  person: Person;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const PersonCard: React.FC<PersonCardProps> = ({ person, onSwipeLeft, onSwipeRight }) => {
  const [swiped, setSwiped] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleSwipeLeft = ():void => {
    if (!swiped) {
      onSwipeLeft();
      setSwiped(true);
      setDislike(true);
      setTimeout(() => setDislike(false), 300);
    }
  };

  const handleSwipeRight = () => {
    if (!swiped) {
      onSwipeRight();
      setSwiped(true);
      setLike(true);
      setTimeout(() => setLike(false), 300);
    }
  };

  return (
    <SwipeCard
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      style={{ width: '300px', height: '400px' }} // Задайте размеры по своему усмотрению
    >
      <div className={`person-card ${like ? 'like' : ''} ${dislike ? 'dislike' : ''}`}>
        <img className="profile-pic" src={person.profilePic} alt="Profile" />
        <h2 className="name">{person.name}</h2>
        <p className="description">{person.description}</p>
        {like && <div className="like-overlay">LIKE</div>}
        {dislike && <div className="dislike-overlay">NOPE</div>}
      </div>
    </SwipeCard>
  );
};

export default PersonCard;
 */

import React from 'react'

export default function PersonCard():JSX.Element {
  return (
    <div>PersonCard</div>
  )
}
