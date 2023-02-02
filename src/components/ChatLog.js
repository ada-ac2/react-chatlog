import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatMessage from '../models/ChatMessage';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry
          message={entry}
          onUpdateEntry={props.onUpdateChatEntry}
          getColor={props.getColor}
        ></ChatEntry>
      </li>
    );
  });

  return (
    <section className="chat-log">
      <ul className="chat-entries-list">{chatEntries}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.instanceOf(ChatMessage)).isRequired,
  onUpdateChatEntry: PropTypes.func.isRequired,
  //getColor: PropTypes.func,
};

export default ChatLog;
