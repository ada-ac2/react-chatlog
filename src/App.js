import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [chatEntries, setChatEntries] = useState(chatMessages);

  let initalNumLiked = 0;
  for (const message of chatEntries) {
    if (message.liked) {
      initalNumLiked++;
    }
  }

  const [numLiked, setNumLiked] = useState(initalNumLiked);

  const updateHeartChatEntries = (updatedMessage) => {
    const updatedChat = chatEntries.map((message) => {
      if (message.id === updatedMessage.id) {
        if (updatedMessage.liked) {
          setNumLiked(numLiked + 1);
        } else {
          setNumLiked(numLiked - 1);
        }
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatEntries(updatedChat);
  };

  return (
    <div id="App">
      <header>
        <h1>{numLiked} ❤️s</h1>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onUpdateChatHeart={updateHeartChatEntries}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
