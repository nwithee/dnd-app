import React from 'react';
import skillList from './skillList';
import "./skill.css";

const Skill = () => {

  let skills = skillList
  let skillslist = [];
  skills.forEach((skill, index) => {
    skillslist.push(
      <li key={index}>
        <input name={`${skill}-prof`} type="checkbox" />
        <label htmlFor={skill}>{skill} <span className="skill">(Atr)</span></label>
        <input name={skill} placeholder="+0" type="text" />
      </li>
    )
  })

  return (
    <div>
      <ul>
        {skillslist}
      </ul>
    </div>
  )
}


export default Skill;