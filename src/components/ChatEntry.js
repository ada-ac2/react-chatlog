import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [isClicked, setIsClicked] = useState(false); 
  const [clickCount, setClickCount] = useState(0)

  const updateClickState = () => {
    setIsClicked(!isClicked)
  }
  const updateClickCount = () => {
    console.log('update click coount')
    setClickCount(clickCount+1)
  }
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
        <button className = "like" onClick={updateClickState}>{isClicked ? '❤️' : '🤍'}</button>
      </section>
    </div>
  )};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default ChatEntry;
