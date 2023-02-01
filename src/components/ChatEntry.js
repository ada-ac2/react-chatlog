import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, onUpdateLikes }) => {
  const chatTime = <TimeStamp time={timeStamp} />;
  const localOrRemote = id % 2 === 0 ? 'remote' : 'local';
  const updateLikes = (id) => {
    onUpdateLikes(id);
  };
  const heartLiked = liked ? '❤️' : '🤍';

  return (
    <div key={id} className={`chat-entry ${localOrRemote}`}>
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
  id: PropTypes.number,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
  onUpdateLikes: PropTypes.func,
};

export default ChatEntry;
