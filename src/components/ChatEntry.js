import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, onUpdateChat, liked}) => {
  const updateClickState = () => {
    onUpdateChat({
      id, 
      sender,
      body, 
      timeStamp, 
      liked : !liked
    })
  }
  const heartStyle = liked ? '❤️' : '🤍';
  let entryClass = ''

  if(sender === 'Vladimir'){
    entryClass = 'local';
  }else{
    entryClass = 'remote'; 
  }

  return (
    <div className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className = "like" onClick={updateClickState}>{heartStyle}</button>
      </section>
    </div>
  )};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onUpdateChat:PropTypes.func
};

export default ChatEntry;
