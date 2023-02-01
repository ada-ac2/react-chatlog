import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import HeartInfo from './components/HeartInfo.js';
import messageData from './data/messages.json';


const App = () => {

  const [chatEntryData, setChatEntryData] = useState(messageData);
  const [likesCount, setLikesCount] = useState(0);
  
  const updateChatEntryData = updatedChatEntry => {
    const entries = chatEntryData.map(entry => {
      if (entry.id === updatedChatEntry.id) {
        return updatedChatEntry;
      } else {
        return entry;
      }
    });
    const updatedLikesCount = () => {
      let newLikesCount = 0;
      for (const entry of entries) {
        if (entry.liked === true) {
          newLikesCount += 1;
        }
      }
      return newLikesCount;
    }

    setChatEntryData(entries);
    setLikesCount(updatedLikesCount);

  };
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section>
          {<HeartInfo
            likesCount={likesCount}
            onUpdateChatEntry={updateChatEntryData}
          />
          }
        </section>
      </header>
      <main>
        
        <section className="chat-entry local">
        {
          <ChatLog 
            entries={chatEntryData}
            onUpdateChatEntry={updateChatEntryData}
          />
        }
        </section>
      </main>
    </div>
  );
};

export default App;
