import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {

  const onUpdateButtonClick = () => {
    const updatedEntry = {
      id: props.id,
      sender: props.sender,
      timeStamp: props.timeStamp,
      body: props.body,
      liked: !props.isLiked,
      sender1: props.localSender
    };
    props.onUpdate(updatedEntry);
};

  const heart = props.isLiked ? '❤️' : '🤍';
  const senderClass = props.sender === props.localSender ? 'chat-entry local' : 'chat-entry remote';
  
  return (
    <div className={senderClass} > 
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p> {props.body} </p>
        <p className="entry-time">{<TimeStamp time={props.timeStamp}/> }</p>
        <button className="like" onClick={onUpdateButtonClick}>{heart}</button>
      </section>
    </div>
  );
};

/* ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  localSender: PropTypes.string.isRequired
}; */

export default ChatEntry;
