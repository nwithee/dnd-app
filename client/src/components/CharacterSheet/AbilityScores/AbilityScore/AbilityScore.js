import React, { useState } from 'react';



const AbilityScore = (props) => {

  const [abilityScore, setAbilityScore] = useState('');
  const [abilityScoreModifier, setAbilityScoreModifier] = useState('');

  const handleScoreChange = (event) => {
  setAbilityScore(event.target.value);
  setAbilityScoreModifier(Math.floor((abilityScore - 10) / 2));
  }

  return ( 
      <li>
        <div className="score">
          <label>{props.scoreName}</label>
          <input 
          name={`${props.scoreName}score`} 
          placeholder="10"
          value={abilityScore}
          onChange={ handleScoreChange } />
        </div>
        <div className="modifier">
          <label>{`${props.scoreName} Mod`}</label>
          <input 
          name={`${props.scoreName}mod`} 
          placeholder="+0" defaultValue={abilityScoreModifier}/>
        </div>
      </li>
  )
}


export default AbilityScore;
