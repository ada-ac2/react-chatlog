import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const entries = props.entries.map((entry, index) => {
    return (
      <ChatEntry 
        key={index}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={props.onUpdate}
        />);
      });
    return(
      <section className="chat-log">
        {entries}
      </section>
    );
    
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool,
  })).isRequired,
  onUpdate: PropTypes.func.isRequired
};


export default ChatLog;
