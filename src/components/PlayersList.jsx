// src/components/PlayersList.js
import React from 'react';
import Player from './Player';
import players from '../players';

const PlayersList = () => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
