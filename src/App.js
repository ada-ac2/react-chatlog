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
        <div>{<ChatLog chats={chatData} />}</div>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
