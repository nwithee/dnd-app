import React from 'react';
import SimpleText from './SimpleText/SimpleText';
import Dropdown from './Dropdown/Dropdown';

const Bio = () => {
  return (
    <div>
      <SimpleText textID='characterName' label='name'/>
      <Dropdown options='classOptions'/>
      <Dropdown textID='backgroundOptions'/>
      <SimpleText textID='playerName' label='name'/>
      <Dropdown textID='raceOptions'/>
      <Dropdown textID='alignmentOptions'/>
      <SimpleText textID='characterXP' label='XP'/>
    </div>
  )
};

export default Bio;