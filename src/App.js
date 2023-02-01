import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog'; 
import chatMessages from './data/messages.json';

let numberLikes = 0;

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);   
  const updateChatEntry = (chatToUpdate) => {
    const chats = chatEntries.map((entry) => {
      if(entry.id === chatToUpdate.id){
        numberLikes = chatToUpdate.liked ? numberLikes+1 : numberLikes-1
        return chatToUpdate; 
      }
      return entry;
    });
    setChatEntries(chats); 
  };

  return (
    <div id="App">
      <header>
        <div className='applicationTitle'>
          <h1>Chat between <span className='green'>Vladimir</span> and <span className='blue'>Estragon</span> </h1>
        </div>
        <div className='numberOfLikes'>
          <h1 className='numberLikes'>{numberLikes} ❤️s</h1>
        </div>
      </header>
      <main>
        <ChatLog entries = {chatEntries}
          onUpdateChat = {updateChatEntry}
        />
      </main>
    </div>
  );
};

export default App;
