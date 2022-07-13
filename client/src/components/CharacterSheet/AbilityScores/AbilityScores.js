import React from 'react';

import AbilityScore from './AbilityScore/AbilityScore.js';
import "./AbilityScores.css"

const AbilityScores = (props) => {
  return (
    <form class="abilityScores">
    <div>
      <section class="AbilityScore">
      <li><AbilityScore scoreName = {'Strength'} /></li>
      <li><AbilityScore scoreName = {'Dexterity'} /></li>
      <li><AbilityScore scoreName = {'Constitution'} /></li>
      <li><AbilityScore scoreName = {'Intelligence'} /></li>
      <li><AbilityScore scoreName = {'Wisdom'} /></li>
      <li><AbilityScore scoreName = {'Charisma'} /></li>
      </section>
    </div>
    </form>
  )

}

export default AbilityScores;