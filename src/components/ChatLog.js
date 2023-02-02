import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatEntry = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        onUpdate={props.onUpdateChatMessages}
      ></ChatEntry>
    );
  });
  return <section className="chat-log">{chatEntry}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool.isRequired,
      onUpdate: PropTypes.func.isRequired,
    }).isRequired
  ),
};

export default ChatLog;
