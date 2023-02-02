import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, onupdate, local, colorForLocal, colorForRemote})=>{


    const chatentryComponents = entries.map((message, index)=>{
        return <ChatEntry 
                onupdate={onupdate} liked={message.liked} key={index} id={message.id}
                sender={message.sender} body={message.body} timeStamp={message.timeStamp} local={local}
                colorForLocal={colorForLocal} colorForRemote={colorForRemote}
                />;
        });

    return <section className='chat-log'>{chatentryComponents}</section>;
}

ChatLog.propTypes= {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            sender: PropTypes.string,
            body: PropTypes.string,
            timeStamp:PropTypes.string,
            liked:PropTypes.bool,   
        })
    ),
    onupdate: PropTypes.func,
    local: PropTypes.string,
    colorForLocal:PropTypes.string,
    colorForRemote:PropTypes.string,
};
export default ChatLog;