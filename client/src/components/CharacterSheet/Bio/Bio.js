import React, { useState } from 'react';

import CharacterName from './CharacterName';
import PlayerClass from './PlayerClass';
import PlayerBackground from './PlayerBackground';
import PlayerName from './PlayerName';
import PlayerRace from './PlayerRace';
import PlayerAlignment from './PlayerAlignment';
import PlayerXP from './PlayerXP';

const Bio = () => {
  return (
    <div>
      <CharacterName />
      <PlayerClass />
      <PlayerBackground />
      <PlayerName />
      <PlayerRace />
      <PlayerAlignment />
      <PlayerXP />
    </div>
  )
};

export default Bio;