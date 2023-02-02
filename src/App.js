import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  const [entries, setEntries] = useState(chatMessages);

  const heartCount = () => {
    let count = 0;
    for (let entry of entries) {
      if (entry.liked) {
        count++;
      }
    }
    return count;
  };

  const updateMessageData = (updateMessage) => {
    const messages = entries.map((message) => {
      if (message.id === updateMessage.id) {
        return updateMessage;
      } else {
        return message;
      }
    });
    setEntries(messages);
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h2 id="heartWidget" className="widget">
            <span>{heartCount()} ❤️s</span>
          </h2>
        </section>
      </header>
      <main>
        {<ChatLog entries={entries} onUpdateLikes={updateMessageData} />}
      </main>
    </div>
  );
};

export default App;
