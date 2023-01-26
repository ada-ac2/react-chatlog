import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatEntry from '../src/components/ChatEntry'

const MESSAGES = chatMessages;
const message = MESSAGES[0]

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component*/}
        <ChatEntry
        key={message.id}
        id={message.id}       
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
      />
        {/* Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
