import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  const getChatLogJSX = (entries) => {
    return entries.map((chat) => {
      return (
        <ChatEntry
          key={chat.id}
          id={chat.id}
          sender={chat.sender}
          body={chat.body}
          timeStamp={chat.timeStamp}
          liked={chat.liked}
        />
      );
    });
  };
  return <ul className="chat-log">{getChatLogJSX(entries)}</ul>;
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
};

export default ChatLog;
