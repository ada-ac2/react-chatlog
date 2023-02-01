import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css'; 


const ChatLog = ({entries, onUpdateChat}) => {
    const messages = entries.map((message) => {
        return(
            <section key = {message.id}>
                <ChatEntry 
                    sender = {message.sender}
                    body = {message.body}
                    timeStamp = {message.timeStamp}
                    id = {message.id}
                    liked = {message.liked}
                    onUpdateChat = {onUpdateChat}
                />
            </section>
        );
    });
    return(messages);
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            sender: PropTypes.string,
            body: PropTypes.string,
            timeStamp: PropTypes.string,
            liked: PropTypes.bool,
            onUpdateChat:PropTypes.func
        })).isRequired
}

export default ChatLog