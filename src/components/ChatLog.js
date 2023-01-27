import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((chat, id) => {
        return (
            <section key = {id}>
                <ChatEntry
                sender = {chat.sender}
                body = {chat.body}
                timeStamp = {chat.timeStamp}
                ></ChatEntry>
            </section>
        );
    });
};
ChatLog.propTypes = {
    chats: PropTypes.array.isRequired,
};

export default ChatLog;