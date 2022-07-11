import React, { useState } from 'react';
import './CharacterName.css';

const CharacterName = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="character-name">
      <label htmlFor="character-name">Character Name</label>
      <input type="text" id="character-name" placeholder='Character Name' value={name} onChange={handleChange} />
    </div>
  )
}

export default CharacterName;