import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, onUpdateLikes }) => {
  const getChatLogJSX = (entries, onUpdateLikes) => {
    return entries.map((chat) => {
      return (
        <ChatEntry
          key={chat.id}
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
          onUpdateLikes={onUpdateLikes}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(entries, onUpdateLikes)}</ul>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onUpdateLikes: PropTypes.func.isRequired,
};

export default ChatLog;
