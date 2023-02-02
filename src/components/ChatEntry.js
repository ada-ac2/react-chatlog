import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const toggleLike = () => {
    const update = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateLike(update);
  };

  const sender = <h2 className="entry-name">{props.sender}</h2>;
  const content = (
    <section className="entry-bubble">
      <p>{props.body}</p>
      <p className="entry-time">
        <TimeStamp time={props.timeStamp} />
      </p>
      <button className="like" onClick={toggleLike}>
        {props.liked ? '❤️' : '🤍'}
      </button>
    </section>
  );

  const bubbleSide =
    props.id % 2 === 1 ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={bubbleSide}>
      {sender}
      {content}
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
};

export default ChatEntry;
