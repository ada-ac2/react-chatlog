import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const updateLikes = () => {
    const updateEntry = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.onUpdate(updateEntry);
  };

  const heartLiked = props.liked ? '❤️' : '🤍';

  const bubbleClass =
    props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={bubbleClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={updateLikes}>
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
  liked: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default ChatEntry;
