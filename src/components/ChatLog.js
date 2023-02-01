import React from 'react';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({entries, onUpdate, localColor, remoteColor, localSender}) => {
    return <ul className="chat-log">
        {entries.map((entry) => (
            (entry.sender === localSender)?
                <ChatEntry
                key={entry.id}
                id={entry.id}       
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                onUpdate = {onUpdate}
                color={localColor}
                location='local'
            /> :
            <ChatEntry
                key={entry.id}
                id={entry.id}       
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                onUpdate = {onUpdate}
                color={remoteColor}
                location='remote'
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
    onUpdate: PropTypes.func,
    localColor: PropTypes.string,
    remoteColor: PropTypes.string,
    localSender: PropTypes.string,
};

export default ChatLog;
