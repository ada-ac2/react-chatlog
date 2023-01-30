import React, {useState} from 'react';
import './App.css';
import ChatLog from './components/ChatLog'; 
import chatMessages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);  

  const updateChatEntry = (chatToUpdate) => {
    const chats = chatEntries.map((entry) => {
      if(entry.id === chatToUpdate.id){
        return chatToUpdate; 
      }
      return entry; 
    });
    setChatEntries(chats); 
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries = {chatMessages}
          onUpdateChat = {updateChatEntry}
        />
      </main>
    </div>
  );
};

export default App;
