import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const getChatLog = props.messages.map((message) => {
    return (
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onUpdate={props.updateLikeStatus}
      ></ChatEntry>
    );
  });

  const allChatMessages = (
    <section>
      <section className="chat-log no-bullet">{getChatLog}</section>
    </section>
  );
  return allChatMessages;
};

ChatLog.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    }).isRequired
  ),
  updateLikeStatus: PropTypes.func.isRequired,
};

export default ChatLog;
