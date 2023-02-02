import React from 'react';
import { useState } from 'react';
import './App.css';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const [chatMessagesData, setChatMessagesData] = useState(chatMessages);

  const updateChatMessagesData = (updatedChatMessages) => {
    const messages = chatMessagesData.map((chatMessage) => {
      if (chatMessage.id === updatedChatMessages.id) {
        return updatedChatMessages;
      } else {
        return chatMessage;
      }
    });
    setChatMessagesData(messages);
  };
  let count = 0;
  const countLike = () => {
    for (let i = 0; i < chatMessagesData.length; ++i) {
      if (chatMessagesData[i]['liked'] === true) {
        count += 1;
      }
    }
    return count;
  };

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <section>
          <h1 className="widget" id="heartWidget">
            {countLike()} ❤️s
          </h1>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        {/* <ChatEntry
          sender={chatMessages[0].sender}
          body={chatMessages[0].body}
          timeStamp={chatMessages[0].timeStamp}
        ></ChatEntry> */}

        <ChatLog
          entries={chatMessagesData}
          onUpdateChatMessages={updateChatMessagesData}
        ></ChatLog>
      </main>
    </div>
  );
};

export default App;
