import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat Log Application</h1>
      </header>
      <main>
        <div>{<ChatLog entries={chatMessages} />}</div>
      </main>
    </div>
  );
};

export default App;
