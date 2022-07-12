import React from 'react';

import AbilityScore from './AbilityScore/AbilityScore.js';

const AbilityScores = (props) => {
  return (
    <div>
      <AbilityScore scoreName = {'Strength'} />
      <AbilityScore scoreName = {'Dexterity'} />
      <AbilityScore scoreName = {'Constitution'} />
      <AbilityScore scoreName = {'Intelligence'} />
      <AbilityScore scoreName = {'Wisdom'} />
      <AbilityScore scoreName = {'Charisma'} />
    </div>
  )
}

export default AbilityScores;