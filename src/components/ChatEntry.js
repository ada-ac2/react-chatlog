import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ChatEntry = (props) => {
  //const [doLike,ChangeHeart] = useState('🤍');
  // const ChangeHeart = () => {
  //   if(props.liked === true){
  //     props.liked = false;}
  //   else{
  //     props.liked = true;
  //   }
  //   };
  return (
    <div  
    className={'chat-entry ' + (props.sender === 'Vladimir' ? 'local' : 'remote')}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{props.timeStamp}</p>
        <button className="like">🤍</button>
        
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool,
};

export default ChatEntry;
