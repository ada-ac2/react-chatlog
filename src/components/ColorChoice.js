import React from 'react';
import PropTypes from 'prop-types';
import './ColorChoice.css';

const ColorChoice = ({ senderName, newColor, updateColor }) => {
  return (
    <section className="widget">
      <h3 className={newColor}>{senderName}'s color:</h3>
      <button onClick={() => updateColor('red')} className="red"></button>
      <button onClick={() => updateColor('orange')} className="orange"></button>
      <button onClick={() => updateColor('yellow')} className="yellow"></button>
      <button onClick={() => updateColor('green')} className="green"></button>
      <button onClick={() => updateColor('blue')} className="blue"></button>
      <button onClick={() => updateColor('purple')} className="purple"></button>
    </section>
  );
};

ColorChoice.propTypes = {
  senderName: PropTypes.string.isRequired,
  newColor: PropTypes.string.isRequired,
  updateColor: PropTypes.func.isRequired,
};

export default ColorChoice;
