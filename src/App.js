import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatData, updateChatData] = useState(chatMessages);
  const updateLikes = (id) => {
    const chats = chatData.map((chat) => {
      if (chat.id === id) {
        const newChat = { ...chat };
        newChat.liked = !newChat.liked;
        return newChat;
      }
      return chat;
    });
    updateChatData(chats);
  };
  const totalLikes = () => {
    let total = 0;
    for (let chat of chatData) {
      if (chat.liked === true) {
        total += 1;
      }
    }
    return total;
  };
  return (
    <div id="App">
      <header id="App header">
        <h1 id="App h1">
          Chat between {chatData[0].sender} and {chatData[1].sender}
        </h1>
        <section id="App header section">
          <h2 id="heartWidget" className="widget">
            <span id="App span">{totalLikes()} ❤️s</span>
          </h2>
        </section>
      </header>
      <main id="App main">
        <div>{<ChatLog entries={chatData} onUpdateLikes={updateLikes} />}</div>
      </main>
    </div>
  );
};

export default App;
