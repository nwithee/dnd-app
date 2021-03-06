import React, { useState } from 'react';

const PlayerRace = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div>
      <label htmlFor="player-name">Player Name</label>
      <input type="text" id="player-name" placeholder='Player Race' value={name} onChange={handleChange} />
    </div>
  )
};

export default PlayerRace;