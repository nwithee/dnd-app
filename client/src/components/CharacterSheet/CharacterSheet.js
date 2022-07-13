import React from 'react';
import AbilityScores from "./AbilityScores/AbilityScores.js"
import Bio from "./Bio/Bio.js"
import Skills from "./Skills/Skills.js"
import "./CharacterSheet.css"


const CharacterSheet = (props) => {
    return (
        <section class="sheet">
        <form class="charForm">
        <div>
            <haeder class="bioInfo">
            <Bio />
            </haeder>
            <main class="body">
            <container>
                <header>Ability Score</header>
                <AbilityScores /></container>
            <container>
                <br></br>
                <header>Skills</header>
                <Skills /></container>
            </main>
        </div>
        </form>
        </section>
    )
}

export default CharacterSheet;