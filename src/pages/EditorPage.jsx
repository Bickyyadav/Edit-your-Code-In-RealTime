import { useState } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [clients, setClient] = useState([
    { socketId: 1, username: 'Rakes K' },
    { socketId: 2, username: 'john Doe' },
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="homePageLogo" src="/websocket.jpg" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map(client => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">Copy Room ID</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};

export default EditorPage;
