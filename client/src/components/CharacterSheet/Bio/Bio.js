import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import SimpleText from './SimpleText/SimpleText';

const Bio = () => {
  return (
    <div>
      <SimpleText textID='characterName' label='Name'/>
      <Dropdown options={classDropdownOptions} />
      <SimpleText textID='playerName' label='Name'/>
      <SimpleText textID='characterXP' label='XP'/>
    </div>
  )
};

export default Bio;