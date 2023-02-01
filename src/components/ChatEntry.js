import React from 'react';
import '../App.css';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, onUpdate, sender, body, timeStamp, liked, localColor, remoteColor, localSender, remoteSender}) => {

  const toggleHeart = () => {
    return onUpdate({
      id,
      sender,
      body,
      timeStamp,
      liked: !liked,
    })
  };

  let chatLocation;
  if(sender === localSender){ 
    chatLocation='local' 
  } else if (sender === remoteSender) {
    chatLocation='remote'
  };

  let currentColor;
  if(chatLocation ==='local'){
    currentColor = localColor;
  } else {
    currentColor = remoteColor;
  };

  return (
    <div className={`chat-entry ${chatLocation}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className={`${currentColor}`}>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/></p>
        <button className="like" onClick={toggleHeart}>{liked? '❤️' : '🤍'}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
    id: PropTypes.number,
    sender : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired,
    timeStamp : PropTypes.string.isRequired,
    liked: PropTypes.bool,
    localColor: PropTypes.string,
    remoteColor: PropTypes.string,
    localSender: PropTypes.string,
    remoteSender: PropTypes.string

};

export default ChatEntry;
