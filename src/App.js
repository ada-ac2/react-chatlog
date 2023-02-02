import React, { useState } from 'react';
import './App.css';
//import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

// const message = {
//   id: 1,
//   sender: 'Vladimir',
//   body: 'why are you arguing with me',
//   timeStamp: '2018-05-29T22:49:06+00:00',
//   liked: false,
// };

const App = () => {
  const [chatData, setChatData] = useState(chatMessages);
  const [numLiked, setNumLiked] = useState(0);

  const updateChatHeart = (updatedChat) => {
    const chats = chatData.map((chat) => {
      if (chat.id === updatedChat.id) {
        if (updatedChat.liked) {
          setNumLiked(numLiked + 1);
        } else {
          setNumLiked(numLiked - 1);
        }
        return updatedChat;
      } else {
        return chat;
      }
    });
    setChatData(chats);
  };
  return (
    <div id="App">
      <header>
        <h1>OcelotChat</h1>
        <h1>{numLiked} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatData} onUpdateChatHeart={updateChatHeart} />
      </main>
    </div>
  );
};

export default App;
