import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import ChatMessage from '../models/ChatMessage';

const ChatEntry = (props) => {
  const chatMsg = props.message;
  const typeHeart = chatMsg.liked ? '❤️' : '🤍';

  const clickLike = (e) => {
    props.onUpdateEntry(
      new ChatMessage(
        chatMsg.id,
        chatMsg.sender,
        chatMsg.body,
        chatMsg.timeStamp,
        !chatMsg.liked
      )
    );
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.message.sender}</h2>
      <section className="entry-bubble">
        <p>{props.message.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.message.timeStamp}></TimeStamp>
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
