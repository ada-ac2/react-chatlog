import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onUpdateChatHeart,
}) => {
  const updateChatEntry = () => {
    const updatedChat = {
      id,
      sender,
      body,
      timeStamp,
      liked: !liked,
    };
    onUpdateChatHeart(updatedChat);
  };

  const heart = liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local" id={id}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>

        <button className="like" onClick={updateChatEntry}>
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChatHeart: PropTypes.func.isRequired,
};

export default ChatEntry;
