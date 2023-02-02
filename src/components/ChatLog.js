import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {
  const entries = props.entries.map((entry) => {
    return (
      <ChatEntry 
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdate={props.onUpdateEntry}
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
  onUpdateEntry: PropTypes.func.isRequired
};


export default ChatLog;
