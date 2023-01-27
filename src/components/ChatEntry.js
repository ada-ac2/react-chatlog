import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, changeLikes}) => {
  const [heart, setHeart]  = useState(liked);

  const toggleHeart = () => {
    setHeart(!heart);
    changeLikes(heart);
  }

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/></p>
        <button className="like" onClick={toggleHeart}>{heart? <span>💚</span> : <span>🤍</span>}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    id: PropTypes.number.isRequired,
    sender : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    timeStamp : PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired 
};

export default ChatEntry;
