import React from 'react';
import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatGlobe from '../models/ChatGlobe';

const ChatLog = (props) => {
  const chatEntries = props.entries.map((entry) => {
    return (
      <li key={entry.id}>
        <ChatEntry chatGlobe={entry}></ChatEntry>
      </li>
    );
  });

  return (
    <section>
      <ul>{chatEntries}</ul>
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.instanceOf(ChatGlobe)),
};

export default ChatLog;
