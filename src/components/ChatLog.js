import React from 'react';
import ChatEntry from './ChatEntry.js';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntries = props.entries.map((entry) => (
        <ChatEntry
            id = {entry.id}
            sender = {entry.sender} 
            timeStamp = {entry.timeStamp}
            body = {entry.body} 
            isLiked = {entry.liked}
            onUpdate = {props.onUpdateEntry}
            localSender = {props.sender1}
        />
        
    ));

    return (
        <section className="chat-log">         
            {chatEntries}
        </section>
    );
};

/* ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    })),
    onUpdate: PropTypes.func.isRequired,
    sender1: PropTypes.func.isRequired
};
 */
export default ChatLog;