import React from 'react';

const BUTTONS = {
    'red': '🔴',
    'orange': '🟠',
    'yellow': '🟡',
    'green': '🟢',
    'blue': '🔵',
    'purple': '🟣',
}

const ColorChoice = ({color, onChange}) => {

    const changeColor = (e) => {
        onChange(color);
    }

    return(
    <button onClick={changeColor}>{BUTTONS[color]}</button>
    );
}
export default ColorChoice;