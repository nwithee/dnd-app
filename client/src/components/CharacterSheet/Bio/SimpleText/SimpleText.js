import React, { useState } from 'react';
import './SimpleText.css';

const SimpleText = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div>
      <label htmlFor={textID}>{`Player ${label}`}</label>
      <input type="text" id={textID} placeholder={`Player ${label}`} value={text} onChange={handleChange} />
    </div>
  )
}

export default SimpleText;