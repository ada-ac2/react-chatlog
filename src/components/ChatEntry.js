import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateLiked }) => {
  const toggleLikes = () => {
    onUpdateLiked({
      id,
      sender,
      body,
      timeStamp,
      liked: !liked,
    });
  };

  const heartColor = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={toggleLikes}>
          {heartColor}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  onUpdateLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
