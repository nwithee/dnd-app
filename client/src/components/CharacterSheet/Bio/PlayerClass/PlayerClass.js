import React, { useState } from "react";
import "./PlayerClass.css";
import "./dummyValues.json";

const PlayerClass = () => {
  const [playerClass, setPlayerClass] = useState("");

  const handleChange = (e) => {
    setPlayerClass(e.target.value);
  }

  return (
    <div className="search-bar">
      <label htmlFor="player-class">Player Class</label>
      <input type="text" id="player-class" placeholder='Player Class' value={playerClass} onChange={handleChange} />
    </div>
  )
}

export default PlayerClass;