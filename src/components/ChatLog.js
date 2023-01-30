import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';

const chatLog = ({ entries }) => {
  const chatEntries = entries.map((entry) => {
    return (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
      />
    );
  });

  return <section>{chatEntries}</section>;
};

export default chatLog;
