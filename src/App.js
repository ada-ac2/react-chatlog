import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import Post from './components/Post';
const App = () => {
  return (
    <div id="App">
      <header>
        <h1>React - ChatLog
        < Post/>
        </h1>
      </header>
      <main>

        {/* Wave 01 */}
        {/* <ChatEntry
        sender = {chatMessages[0].sender}
        body = {chatMessages[0].body}
        timeStamp = {chatMessages[0].timeStamp}
        >
        </ChatEntry> */}
        <ChatLog
        entries={chatMessages}
        >  
        </ChatLog>
        
      </main>
    </div>
  );
};

export default App;
