import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getChats = props.entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
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
