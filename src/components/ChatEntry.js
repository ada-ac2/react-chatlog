import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatMessage from '../models/ChatMessage';

const ChatEntry = (props) => {
  const chatMsg = props.message;
  const typeHeart = chatMsg.liked ? '❤️' : '🤍';
  const isLocalclass = chatMsg.isLocal ? 'local' : 'remote';

  console.log('IsLocal from prop: ', chatMsg.isLocal);
  console.log('IsLocal from clasName', isLocalclass);

  const clickLike = (e) => {
    props.onUpdateEntry(
      new ChatMessage(
        chatMsg.id,
        chatMsg.sender,
        chatMsg.body,
        chatMsg.timeStamp,
        !chatMsg.liked,
        chatMsg.isLocal
      )
    );
  };

  return (
    <div className={`chat-entry ${isLocalclass}`}>
      <h2 className="entry-name">{chatMsg.sender}</h2>
      <section className="entry-bubble">
        <p>{chatMsg.body}</p>
        <p className="entry-time">
          <TimeStamp time={chatMsg.timeStamp}></TimeStamp>
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
