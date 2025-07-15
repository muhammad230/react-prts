import React, { useState } from 'react';

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState('white'); // initial color

  const changeColor = () => {
    // Change background to a different color (you can customize)
    setBgColor(bgColor === 'white' ? 'lightblue' : 'white');
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <button className="btn btn-primary" onClick={changeColor}>
        Change Background Color
      </button>
      <p>The background color is: {bgColor}</p>
    </div>
  );
}
