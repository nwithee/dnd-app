import React from 'react';

// import PlayerClass from './PlayerClass/PlayerClass.js';
// import PlayerBackground from './PlayerBackground/PlayerBackground.js';
// import PlayerRace from './PlayerRace/PlayerRace.js';
// import PlayerAlignment from './PlayerAlignment/PlayerAlignment.js';
import SimpleText from './SimpleText/SimpleText';

const Bio = () => {
  return (
    <div>
      <SimpleText textID='characterName' label='name'/>
      <SimpleText textID='characterClass' label='class'/>
      <SimpleText textID='characterBackground' label='background'/>
      <SimpleText textID='playerName' label='name'/>
      <SimpleText textID='characterRace' label='race'/>
      <SimpleText textID='characterAlignment' label='alignment'/>
      <SimpleText textID='characterXP' label='XP'/>
    </div>
  )
};

export default Bio;