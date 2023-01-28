import PropTypes from 'prop-types';
import React from 'react'; 
import ChatEntry from './ChatEntry';
import chatMessages from './data/messages.json';

const ChatLog = (props) => {
    const messages = chatMessages.map((message) => {
        return(
            <section key = {message.id}>
                <ChatEntry sender = {message.sender}
                body = {message.body}
                timeStamp = {message.timeStamp}/>
            </section>
        );
    });
}