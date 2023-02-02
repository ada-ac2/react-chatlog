import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const getTotalHearts = () => {
    let totalHearts = 0;
    entries.forEach((entry) => {
      if (entry.liked) {
        totalHearts++;
      }
    });
    return totalHearts;
  };

  const updateEntry = (entryToUpdate) => {
    const updatedEntries = entries.map((entry) => {
      if (entry.id === entryToUpdate.id) {
        return entryToUpdate;
      }
      return entry;
    });
    setEntries(updatedEntries);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          <h2 id="heartWidget" className="widget">
            {getTotalHearts()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog entries={entries} onUpdateLiked={updateEntry} />
      </main>
    </div>
  );
};

export default App;
