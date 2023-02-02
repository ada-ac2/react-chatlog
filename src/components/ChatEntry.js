import React from 'react';
import { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp }) => {
  const [like, setLike] = useState(false);
  const updateLike = () => {
    setLike(!like);
  };
  return (
    <div
      className={'chat-entry ' + (sender === 'Vladimir' ? 'local' : 'remote')}
    >
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{<TimeStamp time={timeStamp}></TimeStamp>}</p>
        <button className="like" onClick={updateLike}>
          {!like ? '🤍' : '❤️'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
