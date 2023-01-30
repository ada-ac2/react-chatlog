import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ sender, body, timeStamp, liked }) => {
  const LikedFromProp = liked ? true : false;
  const [isLiked, setIsLiked] = useState(LikedFromProp);
  console.log(isLiked);
  const likeOrUnlikeMessage = () => setIsLiked(!isLiked);
  const heartShape = isLiked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="like" onClick={likeOrUnlikeMessage}>
          {heartShape}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string,
};

export default ChatEntry;
