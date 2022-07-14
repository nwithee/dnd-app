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
            <section class="info">
                <header>Ability Score</header>
                <AbilityScores /></section>
            <section class="info">
                <br></br>
                <header>Skills</header>
                <Skills /></section>
            </main>
        </div>
        </form>
        </section>
    )
}

export default CharacterSheet;