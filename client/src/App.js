import React from 'react';
import logo from './logo.svg';
import './App.css';
import raid from './Raid.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={raid} className="App-logo" alt="logo" />
        <h1 className="Titre">RaidStreaming</h1>
        <form method="post" >
          <p><input type="text" name="rechercher" placeholder="Rechercher un film/auteur ..."/></p>
        </form>
      </header>
      <body>
        <div className="Recommandé">
          <h2>Recommandé pour vous</h2>
        </div>
      </body>
    </div>
  );
}

export default App;
