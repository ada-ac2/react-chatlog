import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, updateChatData] = useState(chatMessages);
  const updateLikes = (id) => {
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
        <div>{<ChatLog entries={chatData} onUpdateLikes={updateLikes} />}</div>
      </main>
    </div>
  );
};

export default App;
