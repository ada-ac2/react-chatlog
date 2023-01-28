import PropTypes from 'prop-types';
import React from 'react'; 
import ChatEntry from './ChatEntry';


const ChatLog = ({entries}) => {
    const messages = entries.map((message) => {
        return(
            <section key = {message.id}>
                <ChatEntry sender = {message.sender}
                body = {message.body}
                timeStamp = {message.timeStamp}/>
            </section>
        );
    });

    return(messages)
};

export default ChatLog