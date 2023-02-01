import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatentryComponents =props.entries.map((chat,index)=>{
        return (
            <div key={index} className="chat-log">
                <ChatEntry
                    id = {chat.id}
                    sender ={chat.sender}
                    body = {chat.body}
                    timeStamp = {chat.timeStamp}
                    liked = {chat.liked}
                    onUpdate = {props.onUpdatechat}
                ></ChatEntry>
            </div>
        );
    });
    return (
        <section>
            <h2>Chat</h2>
            <ul>
                {chatentryComponents};
            </ul>
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        sender: PropTypes.string,
        body: PropTypes.string,
        timeStamp: PropTypes.string,
        liked: PropTypes.bool,
    })
    ).isRequired,
    
    onUpdatechat: PropTypes.func
}; 

export default ChatLog;