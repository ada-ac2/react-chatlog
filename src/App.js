import React, { useState } from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, updateChatData] = useState(chatMessages);
  const likesChanged = (id) => {
    const chats = chatData.map((chat) => {
      if (chat.id === id) {
        chat.liked = !chat.liked;
      }
      return chat;
    });
    updateChatData(chats);
  };
  return (
    <div id="App">
      <header id="App header">
        <h1 id="App h1">Chat between</h1>
      </header>
      <main id="App main">
        <div>
          {
            <ChatEntry
              id={chatData[0].id}
              sender={chatData[0].sender}
              body={chatData[0].body}
              timeStamp={chatData[0].timeStamp}
              liked={chatData[0].liked}
            />
          }
        </div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
