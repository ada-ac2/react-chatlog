import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {
  const calculateLikes = (entries) => {
    let total = 0;
    for (const entry of entries) {
      if (entry.liked) {
        total++;
      }
    }
    return total;
  };

  const getChatLog = (entries) => {
    return entries.map((message) => {
      return (
        <ChatEntry
          key={message.id}
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
      );
    });
  };
  return (
    <section>
      <section>{calculateLikes(entries)}</section>
      <section className="chat-log no-bullet">{getChatLog(entries)}</section>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      liked: PropTypes.bool,
    })
  ).isRequired,
};

export default ChatLog;
