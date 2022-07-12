import React from 'react';
import AbilityScores from "./AbilityScores/AbilityScores.js"
import Bio from "./Bio/Bio.js"
import Skills from "./Skills/Skills.js"


const CharacterSheet = (props) => {
    return (
        <div>
            <AbilityScores />
            <Bio />
            <Skills />
        </div>
    )
}

export default CharacterSheet;