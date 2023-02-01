import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ChatMessage from './models/ChatMessage';

const App = () => {
  const messages = [];
  let isLocal = true;
  for (const msg of chatMessages) {
    messages.push(
      new ChatMessage(
        msg.id,
        msg.sender,
        msg.body,
        msg.timeStamp,
        msg.liked,
        isLocal
      )
    );
    isLocal = !isLocal;
  }
  const [chatEntries, setChatEntries] = useState(messages);

  const updateChatEntry = (updatedEntry) => {
    const updatedMsg = chatEntries.map((entry) => {
      if (entry.id === updatedEntry.id) {
        return updatedEntry;
      } else return entry;
    });
    setChatEntries(updatedMsg);
  };

  const getNumLikes = () => {
    let numLikes = 0;
    for (const entry of chatEntries) {
      if (entry.liked) {
        ++numLikes;
      }
    }
    return numLikes;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {chatEntries[0].sender} and {chatEntries[1].sender}
        </h1>
        <section>
          <h2 className="widget" id="heartWidget">
            {getNumLikes()} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onUpdateChatEntry={updateChatEntry}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
