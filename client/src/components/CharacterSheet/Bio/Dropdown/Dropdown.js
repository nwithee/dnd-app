import React, { useState } from 'react';
import { classOptions, backgroundOptions, raceOptions, alignmentOptions } from './Dropdown/dropdownOptions';

const Dropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  }

  return (
    <div>
      <input type='text' value={selectedOption} onClick={handleDropdownClick}/>
      
      <ul>
        {props.options.map((option) => {
          return (
            <li key={props.options.label} onClick={() => handleOptionClick(option)}>{option.label}</li>
          )}
        )}
      </ul>
    </div>
  )
}






export default Dropdown;