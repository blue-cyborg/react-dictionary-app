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
      <footer className="App-footer">
        Coded by Candice signature
      </footer>
      </div>
    </div>
  );
}

export default App;
