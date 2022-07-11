import React, { useState } from 'react';
import './PlayerName.css';

const PlayerName = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <label htmlFor="player-name">Player Name</label>
      <input type="text" id="player-name" placeholder='Player Name' value={name} onChange={handleChange} />
    </div>
  )
}

export default PlayerName;