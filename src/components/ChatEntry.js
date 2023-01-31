import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatGlobe from '../models/ChatGlobe';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.chatGlobe.sender}</h2>
      <section className="entry-bubble">
        <p>{props.chatGlobe.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.chatGlobe.timeStamp}></TimeStamp>
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  chatGlobe: PropTypes.instanceOf(ChatGlobe),
};

export default ChatEntry;
