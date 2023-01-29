import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [liked, setLiked] = useState(props.liked);
  const heartLiked = liked ? '❤️' : '🤍';

  const bubbleClass = (sender) =>
    sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={bubbleClass(props.sender)}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button onClick={() => setLiked(!liked)}>{heartLiked}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
