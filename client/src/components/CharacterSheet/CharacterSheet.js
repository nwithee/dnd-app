import React from 'react';
import "./Bio/Bio.js"
import "./AbilityScores/AbilityScores.js"
import "./Skills/Skills.js"

function CharacterSheet() {
    return (
    <div>
        <Bio />
        <AbilityScores />
        <Skills />
    </div>
    )

}

export default CharacterSheet;