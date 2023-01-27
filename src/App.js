import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
        sender = {chatMessages[0].sender}
        body = {chatMessages[0].body}
        timeStamp = {chatMessages[0].timeStamp}
        >
        </ChatEntry>
        <ChatLog
        entries={chatMessages}
        >
          
        </ChatLog>

      </main>
    </div>
  );
};

export default App;
