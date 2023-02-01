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
    return <button onClick={()=> onChange(color)}>{BUTTONS[color]}</button>
}
export default ColorChoice;