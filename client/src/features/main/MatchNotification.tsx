import React from 'react';

const MatchNotification = ({ show }: { show: boolean }): JSX.Element => {
  return (
    <div className={`match-notification ${show ? 'show' : ''}`}>
        <h3>Это мэтч 💕 Поздравляем!</h3>
    </div>
  );
};

export default MatchNotification;
