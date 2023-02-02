import React from 'react';
//import PropTypes from 'prop-types';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const entryComponent = props.entries.map((entry, id) => {
    return (
      <li key={id}>
        <ChatEntry
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          liked={entry.liked}
          updateLike={props.onUpdateChat}
        />
      </li>
    );
  });
  return <ul>{entryComponent}</ul>;
};

export default ChatLog;
