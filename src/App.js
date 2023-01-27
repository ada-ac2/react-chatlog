import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [likesCount, setLikesCount] = useState(0);
  const changeLikes = (heart) => {
    if (heart) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
  }
  
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <section> {likesCount} ❤️s</section>
      </header>
      <main>
        <div>
          {<ChatLog 
            entries={chatMessages} 
            changeLikes = {changeLikes}
          />}
          </div>
      </main>
    </div>
  );
};

export default App;
