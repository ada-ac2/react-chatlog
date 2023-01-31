import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    return props.entries.map((chat, id) => {
        return (
            <section key = {id}>
                <ChatEntry
                id = {chat.id}
                sender = {chat.sender}
                body = {chat.body}
                timeStamp = {chat.timeStamp}
                liked={false}
                ></ChatEntry>
            </section>
        );
    });
};
ChatLog.propTypes = {
    entries: PropTypes.array.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
};

export default ChatLog;