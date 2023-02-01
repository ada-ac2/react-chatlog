import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const onFlipHeartClick = () => {
  
    const updatedChatEntry = {
      id : props.id,
      sender : props.sender,
      body : props.body,
      timeStamp : props.timeStamp,
      liked : !props.liked
    };
    props.onUpdate(updatedChatEntry);
  };
  const HeartColor = props.liked ? '❤️':'🤍';
  return (
    <div  
    className={'chat-entry ' + (props.sender === 'Vladimir' ? 'local' : 'remote')}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time = {props.timeStamp}/></p>
        <button onClick={onFlipHeartClick}className="like"  > 
        {HeartColor} 
        </button>
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  onUpdate: PropTypes.func,
};

export default ChatEntry;
