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
  
  const sender1 = chatMessages[0].sender;
  const sender2 = chatMessages[1].sender;

  return (
    <div id="App">
      <header>
        <h1>Chat between {sender1} and {sender2}</h1>
        <section>
        <section id='header-container'>
        <div> 
          <h3>{sender1}'s color</h3>
          <button>🔴</button>
          <button>🟠</button>
          <button>🟡</button>
          <button>🟢</button>
          <button>🔵</button>
          <button>🟣</button>
        
        </div>
        <span id='heart'> {likesCount} ❤️s</span>
        <div> 
          <h3>{sender2}'s color</h3>
          <button>🔴</button>
          <button>🟠</button>
          <button>🟡</button>
          <button>🟢</button>
          <button>🔵</button>
          <button>🟣</button>
        </div>
        </section>
        </section>
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
