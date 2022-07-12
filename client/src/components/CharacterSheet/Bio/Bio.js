import React, { useState } from 'react';

import PlayerClass from './PlayerClass';
import PlayerBackground from './PlayerBackground';
import PlayerRace from './PlayerRace';
import PlayerAlignment from './PlayerAlignment';
import SimpleText from './SimpleText/SimpleText';

const Bio = () => {
  return (
    <div>
      <SimpleText textID='characterName' label='Name'/>
      <PlayerClass />
      <PlayerBackground />
      <SimpleText textID='playerName' label='Name'/>
      <PlayerRace />
      <PlayerAlignment />
      <SimpleText textID='characterXP' label='XP'/>
    </div>
  )
};

export default Bio;