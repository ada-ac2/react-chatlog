import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntry = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      ></ChatEntry>
    );
  });
  return <section className="chat-log">{chatEntry}</section>;
};

export default ChatLog;
