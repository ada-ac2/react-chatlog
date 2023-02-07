import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import { useState } from 'react';

const App = () => {
  // create chatEntries state with imported chatMessages data
  const [chatEntries, setChatEntries] = useState(chatMessages);

  // Function to update chatEntries
  const updateEntries = (updatedEntry) => {
    const entries = chatEntries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else {
        return entry;
      }
    });
    setChatEntries(entries);
  };

  // Track total number of likes in conversation
  let numLikes = 0;
  for (const entry of chatEntries) {
    if (entry.liked) {
      numLikes++;
    }
  }

  return (
    <div id="App">
      <header>
        <h1>{numLikes} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={chatEntries} updateEntries={updateEntries}></ChatLog>
      </main>
    </div>
  );
};

export default App;
