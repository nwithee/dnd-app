import React from 'react';
import Skill from './Skill/Skill.js';
import "./Skills.css";

const Skills = (props) => {
    return (
         <form class="skills">
            <section class="skill">
        <div>
            <li><Skill /></li>
        </div>
        </section>
        </form>
    )
}

export default Skills;