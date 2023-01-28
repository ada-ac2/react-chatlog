import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog.js';
import messageData from './data/messages.json';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <section className="chat-entry local">
        {
          <ChatLog entries={messageData}
          />
        }
        </section>
      </main>
    </div>
  );
};

export default App;
