import React from 'react';

// import PlayerClass from './PlayerClass/PlayerClass.js';
// import PlayerBackground from './PlayerBackground/PlayerBackground.js';
// import PlayerRace from './PlayerRace/PlayerRace.js';
// import PlayerAlignment from './PlayerAlignment/PlayerAlignment.js';
import SimpleText from './SimpleText/SimpleText';
import "./Bio.css";

const Bio = () => {
  return (
    <form class="infoBox">
      <div>
        <section class="charName"><SimpleText textID='characterName' label='name'/></section>
        <section>
          <br></br>
        </section>
        <section class="charInfo">
          <li><SimpleText textID='characterClass' label='class'/></li>
          <li><SimpleText textID='characterBackground' label='background'/></li>
          <li><SimpleText textID='playerName' label='name'/></li>
          <li><SimpleText textID='characterRace' label='race'/></li>
          <li><SimpleText textID='characterAlignment' label='alignment'/></li>
          <li><SimpleText textID='characterXP' label='XP'/></li>
        </section>
    </div>
    </form>
  )
};

export default Bio;