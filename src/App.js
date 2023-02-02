import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

let numberOfLikes = 0;
const App = () => {
  const [MessageData, setMessageData] = useState(chatMessages)
  
  const updateMessageData = updatedChatEntry =>{
    const entries = MessageData.map((chat) => {
      if(chat.id === updatedChatEntry.id){
        numberOfLikes = updatedChatEntry.liked ? numberOfLikes+1 : numberOfLikes-1;
        return updatedChatEntry;
      } else {
        return chat;
      }
      });
      setMessageData(entries);
  };
  
  return (
    <div id="App">
      <header>
        <h1>Chat between VLadimir and Estragon
          <section>
            <p className="widget" id="heartWidget">
            {numberOfLikes} ❤️s
            </p>
          </section>
        </h1>
      </header>
      <main>

        {/* Wave 01 */}
        {/* <ChatEntry
        sender = {chatMessages[0].sender}
        body = {chatMessages[0].body}
        timeStamp = {chatMessages[0].timeStamp}
        >
        </ChatEntry> */}

        <ChatLog
          entries={MessageData}
          onUpdatechat={updateMessageData}>
        </ChatLog>
        
      </main>
    </div>
  );
};

export default App;
