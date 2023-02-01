import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({entries, onUpdate, localColor, remoteColor, localSender, remoteSender}) => {
    return <ul className="chat-log">
        {entries.map((entry) => (
            <ChatEntry
                key={entry.timeStamp}
                id={entry.id}       
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                onUpdate = {onUpdate}
                localColor={localColor}
                remoteColor={remoteColor}
                localSender={localSender}
                remoteSender={remoteSender}
            />
        ))}
        </ul>
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            sender:PropTypes.string.isRequired,
            body:PropTypes.string.isRequired,
            timeStamp:PropTypes.string.isRequired,
            liked:PropTypes.bool,
        })
    ).isRequired,
    localColor: PropTypes.string,
    remoteColor: PropTypes.string,
    localSender: PropTypes.string,
    remoteSender: PropTypes.string
};

export default ChatLog;
