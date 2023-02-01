import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateLikes }) => {
  const chatTime = <TimeStamp time={timeStamp} />;

  const updateLikes = (id) => {
    onUpdateLikes(id);
  };
  const heartLiked = liked ? '❤️' : '🤍';
  return (
    <div key={id} className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">{chatTime}</p>
        <button
          onClick={() => {
            updateLikes(id);
          }}
          className="like"
        >
          {heartLiked}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
