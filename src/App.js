import React, {useState} from 'react';
import './App.css';
import MESSAGES from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorButtons from './components/ColorButtons'

let senders = []; //MESSAGES can have many senders
for (let message of MESSAGES) {
  if (!senders.includes(message.sender)){
    senders.push(message.sender);
  };
};
//This chatLog has only two people
const localSender = senders[0];
const remoteSender = senders[1];
let initialLiked = 0;
for (let message of MESSAGES) {
  if (message.liked){
    initialLiked++
  };
};

const App = () => {
  const [chatMessages, setChatMessages] = useState(MESSAGES);
  const [likesCount, setLikesCount] = useState(initialLiked);
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');
  
  const updateChats = (updatedChat) => {
    const chats = chatMessages.map((chat) => { 
      if (updatedChat.id === chat.id){
        return updatedChat;
      } else {
        return chat;
      }
      
    });
    setChatMessages(chats);
    let likes = 0;
    for (const chat of chats){
      if (chat.liked){
        likes++
      }
    };
    setLikesCount(likes);
  }
  
  const handleLocalColor = (changedColor) => {
    setLocalColor(changedColor)}
  
  const handleRemoteColor = (changedColor) => {
    setRemoteColor(changedColor);
  }

  return (
    <section id="App">
      <header>
        <h1>
          {`Chat between `}
          <span className={`${localColor}`}>{localSender}</span> 
          {` and `} 
          <span className={`${remoteColor}`}>{remoteSender}</span>
        </h1>
        <section>
          <section id='header-container'>
            <section id='header-local'> 
              <h3 className={localColor}>{localSender}'s color</h3>
              <ColorButtons onChange={handleLocalColor} /> 
            </section>
            <span className='widget' id='heartWidget'>{likesCount} ❤️s</span>
            <section id='header-remote'> 
              <h3 className={remoteColor}>{remoteSender}'s color</h3>
              <ColorButtons onChange={handleRemoteColor} />
            </section>
          </section>
        </section>  
      </header>
      <main>
        <section>
          {<ChatLog
            entries={chatMessages} 
            onUpdate={updateChats}
            localColor={localColor}
            remoteColor={remoteColor}
            localSender={localSender}
          />}
          </section>
      </main>
    </section>
  );
};

export default App;
