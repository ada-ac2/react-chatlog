import React, {useState} from 'react';
import './App.css';
import MESSAGES from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice'

const COLORS = ['red','orange','yellow','green','blue','purple']

const App = () => {
  const [chatMessages, setChatMessages] = useState(MESSAGES);
  const [likesCount, setLikesCount] = useState(0);
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

  const localSender = MESSAGES[0].sender;
  let sender;
  for (let message of MESSAGES) {
    if (message.sender !== localSender){
      sender = message.sender;
    }
  }
  const remoteSender = sender;

  return (
    <div id="App">
      <header>
        <h1>
          {`Chat between `}
          <span className={`${localColor}`}>{localSender}</span> 
          {` and `} 
          <span className={`${remoteColor}`}>{remoteSender}</span>
        </h1>
        <section>
        <section id='header-container'>
        <div> 
          <h3 className={localColor}>{localSender}'s color</h3>
          {COLORS.map((preColor, index)=>
            <ColorChoice 
              key={index} 
              color={preColor} 
              onChange={handleLocalColor}
            />)}
        
        </div>
        <span id='heart'> {likesCount} ❤️s</span>
        <div> 
          <h3 className={remoteColor}>{remoteSender}'s color</h3>
          {COLORS.map((preColor, index)=>
            <ColorChoice 
              key={index} 
              color={preColor} 
              onChange={handleRemoteColor}
            />)}
          
        </div>
        </section>
        </section>
      </header>
      <main>
        <div>
          {<ChatLog
            entries={chatMessages} 
            onUpdate={updateChats}
            localColor={localColor}
            remoteColor={remoteColor}
            localSender={localSender}
            remoteSender={remoteSender}
          />}
          </div>
      </main>
    </div>
  );
};

export default App;
