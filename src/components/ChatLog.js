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
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
            onUpdateChat:PropTypes.func.isRequired
        })).isRequired
}

export default ChatLog