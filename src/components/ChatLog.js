import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';
import './ChatLog.css';

const ChatLog = ({ entries, onUpdateLiked }) => {
  const entriesComponents = entries.map((entry) => {
    return (
      <ChatEntry
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onUpdateLiked={onUpdateLiked}
      />
    );
  });
  return <div>{entriesComponents}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool.isRequired,
    }).isRequired
  ),
  onUpdateLiked: PropTypes.func.isRequired,
};

export default ChatLog;
