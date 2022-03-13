import './App.css';
import Dictionary from "./Dictionary"
import Reading from "./Reading"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>
          Dictionary
        </h1>
        <h2>
          Find the word that has you stumped...
        </h2>
        <Reading />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>
      <div className="d-flex justify-content-center">
          <p>
            <span role="img" aria-label="robot">
              🤖
            </span>
            Open source code
            <a
              href="https://github.com/blue-cyborg/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              {""} made by Candice Drave
              <span role="img" aria-label="robot">
                🤖
              </span>
            </a>
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
