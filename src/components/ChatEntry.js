import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;

  const senderSide = (sender === 'Vladimir') ? 'chat-entry local' : 'chat-entry remote';
  const heart = liked ? '❤️' : '🤍';

  return (
    <div className={senderSide}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp} /></p>
        <button className="like" onClick={() => props.onUpdateLikedMessage(id)}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.instanceOf(TimeStamp).isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateLikedMessage: PropTypes.func.isRequired
};

export default ChatEntry;
