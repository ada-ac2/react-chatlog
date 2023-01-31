import React from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import chatMessages from './data/messages.json';
import ChatGlobe from './models/ChatGlobe';

const App = () => {
  const globes = [];
  for (const globe of chatMessages) {
    globes.push(
      new ChatGlobe(
        globe.id,
        globe.sender,
        globe.body,
        globe.timeStamp,
        globe.liked
      )
    );
  }

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between {globes[0].sender} and {globes[1].sender}
        </h1>
      </header>
      <main>
        <ChatLog entries={globes}></ChatLog>
      </main>
    </div>
  );
};

export default App;
