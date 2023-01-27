import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry.js';
import messageData from './data/messages.json';

const entry = messageData[0]

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <section className="chat-entry local">
        {
          <ChatEntry 
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.body}
          />
        }
        </section>
      </main>
    </div>
  );
};

export default App;
