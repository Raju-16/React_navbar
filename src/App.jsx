import "./App.css";

function App() {
  return (
    <div>
      <div className="newbar">
        <div className="logo">
          <h1 className="heading">LOGOBAKERY</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
          </ul>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
