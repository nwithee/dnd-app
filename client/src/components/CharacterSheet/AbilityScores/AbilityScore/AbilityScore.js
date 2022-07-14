<<<<<<< HEAD
import React, { useState } from 'react';
import {ADD_CHAR} from '../../../../utils/mutation';
import { useMutation } from '@apollo/client';

=======
import React, { useState } from "react";
import { ADD_CHAR } from "../../../../utils/mutation";
import { useMutation } from "@apollo/client";
>>>>>>> feature/testchar

const AbilityScore = (props) => {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  const [addChar, { error }] = useMutation(ADD_CHAR);

  const [abilityScore, setAbilityScore] = useState("");
  const [abilityScoreModifier, setAbilityScoreModifier] = useState("");

  const handleScoreChange = (event) => {
    setAbilityScore(event.target.value);
    setAbilityScoreModifier(Math.floor((event.target.value - 10) / 2));
    switch (props.dblabel) {
      case "strength":
        setStrength(event.target.value);
        break;
      case "dexterity":
        setDexterity(event.target.value);
        break;
      case "constitution":
        setConstitution(event.target.value);
        break;
      case "intelligence":
        setIntelligence(event.target.value);
        break;
      case "wisdom":
        setWisdom(event.target.value);
        break;
      case "charisma":
        setCharisma(event.target.value);
        break;
      default:
        break;
    }
    createChar();
  };
  const createChar = () => {
    const dbRef = props.dblabel;
    addChar({
      variables: {
        dbRef: dbRef,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <div className="score">
        <label>{props.scoreName}</label>
        <input
          name={`${props.scoreName}score`}
          placeholder="10"
          value={abilityScore}
          onChange={handleScoreChange}
          on
        />
      </div>
      <div className="modifier">
        <label>{`${props.scoreName} Mod`}</label>
        <input
          name={`${props.scoreName}mod`}
          placeholder="+0"
          defaultValue={abilityScoreModifier}
        />
      </div>
    </li>
  );
};

export default AbilityScore;
