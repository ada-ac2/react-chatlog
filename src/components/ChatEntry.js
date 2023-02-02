import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // const [like, setLike] = useState(props.liked);
  const toggleLike = () => {
    // setLike(!like);
    const update = {
      id: props.id,
      sender: props.sender,
      body: props.body,
      timeStamp: props.timeStamp,
      liked: !props.liked,
    };
    props.updateLike(update);
  };

  const sender = <h2 className="entry-name">{props.sender}</h2>;
  const content = (
    <section className="entry-bubble">
      <p>{props.body}</p>
      <p className="entry-time">
        <TimeStamp time={props.timeStamp} />
      </p>
      <button className="like" onClick={toggleLike}>
        {props.liked ? '❤️' : '🤍'}
      </button>
    </section>
  );
  return (
    <div className="chat-entry local">
      {sender}
      {content}
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
};

export default ChatEntry;
