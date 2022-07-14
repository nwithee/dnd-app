import React from 'react';

import AbilityScore from './AbilityScore/AbilityScore.js';
import "./AbilityScores.css"

const AbilityScores = (props) => {
  return (
    <form class="abilityScores">
    <div>
      <section class="AbilityScore">
      <li><AbilityScore 
      scoreName = {'Strength'} 
      dblabel = {'strength'} /></li>
      <li><AbilityScore 
      scoreName = {'Dexterity'} 
      dblabel = {'dexterity'} /></li>
      <li><AbilityScore 
      scoreName = {'Constitution'} 
      dblabel = {'consitution'}/></li>
      <li><AbilityScore 
      scoreName = {'Intelligence'} 
      dblabel = {'intelligence'}/></li>
      <li><AbilityScore 
      scoreName = {'Wisdom'} 
      dblabel = {'wisdom'}/></li>
      <li><AbilityScore 
      scoreName = {'Charisma'}
      dblabel = {'charisma'} /></li>
      </section>
    </div>
    </form>
  )

}

export default AbilityScores;