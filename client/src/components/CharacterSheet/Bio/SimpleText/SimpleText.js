import React, { useState } from 'react';
import './SimpleText.css';

const SimpleText = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  if (props.textID === 'playerName') {
    return (
      <div>
        <label htmlFor={textID}>{`Player ${label}`}</label>
        <input type="text" id={textID} placeholder={`Player ${label}`} value={text} onChange={handleChange} />
      </div>
  )
  } else {
    return (
      <div>
        <label htmlFor={textID}>{`Character ${label}`}</label>
        <input type="text" id={textID} placeholder={`Character ${label}`} value={text} onChange={handleChange} />
      </div>
    )
  }
}

export default SimpleText;