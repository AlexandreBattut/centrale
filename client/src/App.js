import React from 'react';
import logo from './logo.svg';
import './App.css';
import raid from './Raid.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={raid} className="App-logo" alt="logo" />
        <p className="TextDuMilieu">
          Ceci est le nouveau site interne du RaidCS

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
