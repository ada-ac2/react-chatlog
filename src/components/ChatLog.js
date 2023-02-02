import React from 'react';
import './ChatLog.css';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const messages = props.entries.map((message) => {
    return (

      <div key={message.id}>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
          likedCount={messages.likedCount}
        />
      </div>

    );
  });

  return <section className="chat-log">{messages}</section>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string,
      timeStamp: PropTypes.instanceOf(TimeStamp).isRequired,
      liked: PropTypes.bool.isRequired,
      likedCount: PropTypes.number.isRequired
    })
  )
};

export default ChatLog;
