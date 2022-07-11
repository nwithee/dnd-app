import React, { useState } from 'react';

const AbilityScore = (props) => {
  return () => {

    const [abilityScore, setAbilityScore] = useState(props.abilityScore);
    const [abilityScoreModifier, setAbilityScoreModifier] = useState(props.abilityScoreModifier);

    const handleScoreChange = (event) => {
      setAbilityScore(event.target.value);
      setAbilityScoreModifier(Math.floor((abilityScore - 10) / 2));
    }

    return (
      <li>
        <div className="score">
          <label for={`${scoreName}score`}>{scoreName}</label><input 
          name={`${scoreName}score`} 
          placeholder="10"
          value={abilityScore}
          onChange={handleScoreChange} />
        </div>
        <div className="modifier">
          <p 
          name={`${scoreName}mod`} 
          placeholder="+0"
          value={abilityScoreModifier} />
        </div>
      </li>
    )
  }
}

export default AbilityScore;
