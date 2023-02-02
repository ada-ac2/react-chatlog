import React from 'react';
import './App.css';
import ChatEntry from './components/ChatEntry';

const message = {
  id: 1,
  sender: 'Vladimir',
  body: 'why are you arguing with me',
  timeStamp: '2018-05-29T22:49:06+00:00',
  liked: false,
};

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>OcelotChat</h1>
      </header>
      <main>
        <ChatEntry
          id={message.id}
          sender={message.sender}
          body={message.body}
          timeStamp={message.timeStamp}
          liked={message.liked}
        />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
