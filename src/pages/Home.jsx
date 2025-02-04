/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const roomId = uuidV4();
    setId(roomId);
    toast.success('🎉 New room created!');
  };

  const joinRoom = () => {
    if (!id || !username) {
      toast.error('⚠️ Room ID and Username are required');
      return;
    }
    navigate(`/editor/${id}`, {
      state: { username },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === 'Enter') {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="glassCard">
        <img src="/websocket.jpg" alt="websocket-logo" className="homePageLogo" />
        <h4 className="mainLabel">Join a Collaborative Code Room</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="🔑 Room ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="👤 Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn joinBtn">
            🚀 Join Room
          </button>
          <span className="createInfo">
            No invite? &nbsp;
            <a onClick={createNewRoom} href="#" className="createNewBtn">
              Create a New Room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <p>
          Built with ❤️ by{' '}
          <a href="https://github.com/Bickyyadav/Edit-your-Code-In-RealTime.git" target="_blank" rel="noopener noreferrer">
            Bicky's Code
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
