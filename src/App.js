import React, {useState} from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';
import ColorChoice from './components/ColorChoice';

const App = () => {
  const [messages, setMessages] = useState(chatMessages);
  const [localColor, setLocalColor] = useState('black');
  const [remoteColor, setRemoteColor] = useState('black');
  const local = 'Vladimir';
  const remote = 'Estragon';

  const updateColor = (origin, updatedcolor)=>{
    if (origin === remote){
      setRemoteColor(updatedcolor);
    }else{
      setLocalColor(updatedcolor);
    }
  }


  const updateLike = (updatedmessage)=>{
    const updatedmessages = messages.map(message =>{
      if (message.id === updatedmessage.id){
        return updatedmessage;

      }else{
        return message;
      }
    })
    setMessages(updatedmessages);
  }

  const getHeartCount = () =>{
    let heartCount = 0;
    for (const message of messages){
      if (message.liked){
        heartCount ++;
      }
    }
    return heartCount;
  }

  return (
    <div id="App">
      <header>
        <h1>Chat between <span className={localColor}>{local}</span> and <span className={remoteColor}>{remote}</span> </h1>
        <section className='ribbon'>
          <ColorChoice color={localColor} origin={local} colorupdate={updateColor}/>
          <span className='widget' id='heartWidget'>{getHeartCount()} ❤️s</span>
          <ColorChoice color={remoteColor} origin={remote} colorupdate={updateColor}/>
        </section>
      </header>
      <main>
        <ChatLog entries={messages} onupdate={updateLike} 
                local={local} colorForLocal={localColor} colorForRemote={remoteColor}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
