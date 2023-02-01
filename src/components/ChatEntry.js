import React from 'react';
import '../App.css';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onUpdate, color, location}) => {

  const toggleHeart = () => {
    return onUpdate({
      id,
      sender,
      body,
      timeStamp,
      liked: !liked,
    })
  };

  return (
    <div className={`chat-entry ${location}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={`${color}`}>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/></p>
        <button className="like" onClick={toggleHeart}>{liked? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    id: PropTypes.number,
    sender : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    timeStamp : PropTypes.string.isRequired,
    liked: PropTypes.bool,
    onUpdate: PropTypes.func,
    color: PropTypes.string,
    location: PropTypes.string,
};

export default ChatEntry;
