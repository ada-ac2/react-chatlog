import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog.js';
import { useState } from 'react';


const App = () => {
  const sender1 = chatMessages[0].sender;
  const sender2 = chatMessages[1].sender;
  const [chatEntries, setChatEntries] = useState(chatMessages);
  const [likes, setLikes] = useState(0);

  const incLikes = () =>{
    setLikes(likes + 1);
  };

  const decLikes = () =>{
    setLikes(likes - 1);
  };

  const updateEntry = updatedEntry => {
    const entries = chatEntries.map(entry => {
      if (entry.id === updatedEntry.id) {
        if (updatedEntry.liked) {
          incLikes();
        }
        else {
          decLikes();
        }
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatEntries(entries)
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between {sender1} and {sender2}</h1>
        <section>
        <p className='widget'>{likes} ❤️s</p>
        </section>
      </header>
      <main>
        {<ChatLog 
          entries = {chatEntries}
          onUpdateEntry = {updateEntry}
          sender1 = {sender1} // local sender
        />}
      </main>
    </div>
  );
};

export default App;