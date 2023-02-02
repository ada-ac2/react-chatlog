import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getChats = props.entries.map((entry, index) => {
    return (
      <ChatEntry
        key={entry.id}
        messageDisplay={index % 2}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={props.onUpdateLikes}
      />
    );
  });
  return (
    <div>
      <div className="chat-log">{getChats}</div>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onUpdateLikes: PropTypes.func.isRequired,
};

export default ChatLog;
