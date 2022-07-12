import React from 'react';
import Select from 'react-select';
import { classOptions, backgroundOptions, raceOptions, alignmentOptions } from './Dropdown/dropdownOptions';

const Dropdown = (props) => {

  const selectedOption = props.options;

  return (
    <div>
      <Select
        options={selectedOption}
      />
    </div>
  )
}

export default Dropdown;