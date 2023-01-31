import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  //let shallowCopyMessages = Object.assign({}, chatMessages);
  //let deepCopyMessages = cloneDeep(chatMessages);
  const [chatEntryData, setChatData] = useState(chatMessages);

  const updateEntryData = (updatedMessage) => {
    const entries = chatEntryData.map((message) => {
      if (message.id === updatedMessage.id) {
        return updatedMessage;
      } else {
        return message;
      }
    });
    setChatData(entries);
  };

  const calculateLikes = (entries) => {
    let total = 0;
    for (const entry of entries) {
      if (entry.liked) {
        total++;
      }
    }
    return total;
  };

  const totalLikes = calculateLikes(chatEntryData);
  const entries = (
    <ChatLog
      entries={chatEntryData}
      updateLikeStatus={updateEntryData}
    ></ChatLog>
  );

  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
        <section>
          <span className="widget">{totalLikes} ❤️s</span>
        </section>
      </header>
      <main>
        <div>{entries}</div>
      </main>
    </div>
  );
};

export default App;
