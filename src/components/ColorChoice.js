import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = ({id, colorName, emoji, onChange}) => {

    const changeColor = (e) => {
        onChange(colorName);
    }

    return(
    <button onClick={changeColor}>{emoji}</button>
    );
}

ColorChoice.propTypes = {
    id: PropTypes.number,
    colorName: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ColorChoice;