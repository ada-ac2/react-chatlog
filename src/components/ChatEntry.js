import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatMessage from '../models/ChatMessage';

const ChatEntry = ({ message, onUpdateEntry, getColor }) => {
  const typeHeart = message.liked ? '❤️' : '🤍';
  const isLocalclass = message.isLocal ? 'local' : 'remote';
  const colorClass = getColor(message.isLocal);

  const clickLike = (e) => {
    onUpdateEntry(
      new ChatMessage(
        message.id,
        message.sender,
        message.body,
        message.timeStamp,
        !message.liked,
        message.isLocal
      )
    );
  };

  return (
    <div className={`chat-entry ${isLocalclass}`}>
      <h2 className="entry-name">{message.sender}</h2>
      <section className="entry-bubble">
        <p className={colorClass}>{message.body}</p>
        <p className="entry-time">
          <TimeStamp time={message.timeStamp}></TimeStamp>
        </p>
        <button onClick={clickLike} className="like">
          {typeHeart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  message: PropTypes.instanceOf(ChatMessage).isRequired,
  onUpdateEntry: PropTypes.func.isRequired,
  getColor: PropTypes.func,
};

export default ChatEntry;
