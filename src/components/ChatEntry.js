import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatMessage from '../models/ChatMessage';

const ChatEntry = ({ message, onUpdateEntry }) => {
  const typeHeart = message.liked ? '❤️' : '🤍';
  const isLocalclass = message.isLocal ? 'local' : 'remote';

  console.log('IsLocal from prop: ', message.isLocal);
  console.log('IsLocal from clasName', isLocalclass);

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
        <p>{message.body}</p>
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
};

export default ChatEntry;
