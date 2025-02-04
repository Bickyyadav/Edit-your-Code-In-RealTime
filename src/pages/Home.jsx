const Home = () => {
  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img src="/websocket.jpg" alt="websocket-logo" />
        <h4 className="mainLabel">Paste invitaion Room ID</h4>
        <div className="inputGroup">
          <input type="text" className="inputBox" placeholder="Room ID" />
          <input type="text" className="inputBox" placeholder="USERNAME" />
          <button className="brn joinBtn">Join</button>
          <span className="createInfo">
            {' '}
            If you donot have an invite them create &nbsp;
            <a href="" className="createNewBtn">
              New room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>Built with by <a href=""></a>  </h4>
      </footer>
    </div>
  );
};

export default Home;
