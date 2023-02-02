import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

let likes = 0;
const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const updateChatData = (updatedChat) => {
    const entries = chatData.map((entry) => {
      if (entry.id === updatedChat.id) {
        likes = updatedChat.liked ? ++likes : --likes;
        return updatedChat;
      }
      return entry;
    });
    setChatData(entries);
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat between {chatData[0]['sender']} and {chatData[1]['sender']}
        </h1>
        <section>
          <h1>{likes} ❤️s</h1>
        </section>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChat={updateChatData} />
      </main>
    </div>
  );
};

export default App;
