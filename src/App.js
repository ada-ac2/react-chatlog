import React, { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ChatMessage from './models/ChatMessage';
import ColorChoice from './components/ColorChoice';

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
  const [localColor, setLocalColor] = useState('');
  const [remoteColor, setRemoteColor] = useState('');

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

  const getColor = (local) => {
    if (local) {
      return localColor;
    }
    return remoteColor;
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between{' '}
          <span className={localColor}>{chatEntries[0].sender}</span> and{' '}
          <span className={remoteColor}>{chatEntries[1].sender}</span>
        </h1>
        <section>
          <ColorChoice
            updateColor={setLocalColor}
            senderName={chatEntries[0].sender}
            newColor={localColor}
          ></ColorChoice>
          <h2 className="widget" id="heartWidget">
            {getNumLikes()} ❤️s
          </h2>
          <ColorChoice
            updateColor={setRemoteColor}
            senderName={chatEntries[1].sender}
            newColor={remoteColor}
          ></ColorChoice>
        </section>
      </header>
      <main>
        <ChatLog
          entries={chatEntries}
          onUpdateChatEntry={updateChatEntry}
          getColor={getColor}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
