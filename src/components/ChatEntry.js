import React, { useState } from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
    const heart = props.liked ? '❤️':'🤍';
    let origin = 'local';
    let fontColor = props.colorForLocal;
    if  (props.sender != props.local){
      origin = 'remote';
      fontColor = props.colorForRemote;
    }
    

    const updateLike = () =>{
    const updatedmessage = {
      id:props.id,
      sender:props.sender,
      body:props.body,
      timeStamp:props.timeStamp,
      liked:!props.liked,
    }
    props.onupdate(updatedmessage)
  };
    return (
      <div className={`chat-entry ${origin} ${fontColor}`}>
        <h2 className="entry-name sender">{props.sender}</h2>
        <section className="entry-bubble">
          <p>{props.body}</p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
          <button className="like" onClick={()=>{updateLike()}}>{heart}</button>
        </section>
      </div>
    );
  };

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender:PropTypes.string,
  body:PropTypes.string,
  timeStamp:PropTypes.string,
  liked:PropTypes.bool,
};

export default ChatEntry;
