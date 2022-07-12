import React, { useState } from 'react';

const SimpleText = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  if (props.textID === 'playerName') {
    return (
      <div>
        <label htmlFor={props.textID}>{`Player ${props.label}`}</label>
        <input type='text' id={props.textID} placeholder={`Player ${props.label}`} value={text} onChange={handleChange} />
      </div>
    )
  } else {
    return (
      <div>
        <label htmlFor={props.textID}>{`Character ${props.label}`}</label>
        <input type='text' id={props.textID} placeholder={`Character ${props.label}`} value={text} onChange={handleChange} />
      </div>
    )
  }
}

export default SimpleText;