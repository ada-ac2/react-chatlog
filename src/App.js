import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog'; 
import chatMessages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);   
  let numberLikes = 0 

  const updateChatEntry = (chatToUpdate) => {
    const chats = chatEntries.map((entry) => {
      if(entry.id === chatToUpdate.id){
        return chatToUpdate; 
      }
      return entry;
    });

    setChatEntries(chats); 
  };

  const numberOfLikes = () => {
    for(const entry of chatEntries){
      if(entry.liked){
        numberLikes++ 
      }
    }
    return numberLikes
  }

  return (
    <div id="App">
      <header>
        <div className='applicationTitle'>
          <h1>Application title</h1>
        </div>
        <div className='numberOfLikes'>
          <h1>{numberOfLikes()} ❤️s</h1>
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
