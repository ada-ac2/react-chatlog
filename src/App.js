import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [entryData, setEntryData] = useState(chatMessages);

  const updateLikedMessage = (id) => {
    const allEntries = entryData.map((entry) => {
      if (entry.id === id) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setEntryData(allEntries);
  };

  const totalLikes = () => {
    const allLikes = entryData.reduce((likeCount, entry) => 
    likeCount + entry.liked, 0);
    return allLikes
  };

  const allLikes = totalLikes();

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <div className="widget" id="heartWidget">{allLikes} ❤️s</div>
        </section>
      </header>
      <main>
        <ChatLog
          entries={entryData}
          onUpdateLikedMessage={updateLikedMessage}
        />
      </main>
    </div>
  );
};

export default App;
