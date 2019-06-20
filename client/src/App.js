import React from 'react';
import './App.css';
import raid from './Raid.png'
import bohemian_rhapsody from './bohemian_rhapsody.jpg'
import green_book from './green_book.jpg'
import forrest_gump from './forrest_gump.jpg'
import ligne_verte from './ligne_verte.jpg'
const superagent = require('superagent');



function App() {
              const [movie, setMovie] = React.useState(0);
              React.useEffect(() => {
              superagent
                  .get("http://localhost:5000/application/movie/Forrest Gump")
                  .then(response => setMovie(response.body.movie));
              }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={raid}   className="App-logo" alt="logo" />
        <h1 className="Titre">RaidStreaming</h1>
        <form method="post">
          <p><input type="text" name="rechercher" placeholder="Rechercher un film/auteur ..."/></p>
        </form>
      </header>
      <body>
        <div className="Recommandé">
          <p> {movie.author} </p>

          <h2>Recommandé pour vous</h2>
          <p> {movie.title} </p>

          <div className="FilmsRecommandés">

              <img src={ligne_verte} className="img_film1" alt="Image du film 1" />

              <div className="Film1">

                  <h3 className="TitreFilm1"> GugliMovie </h3>
                  <p> Auteur: Filix </p>
                  <p> Durée: 2h30 </p>
                  <p> Genre: Horreur </p>



              </div>

              




              <img src={green_book} className="img_film2" alt="Image du film 2" />

              <div className="Film2">

                  <h3 className="TitreFilm2"> Itsas Mendi </h3>
                  <p> Auteur: RaidCS </p>
                  <p> Durée: 5j </p>
                  <p> Genre: Sport </p>
              </div>

              <img src={forrest_gump} className="img_film3" alt="Image du film 3" />
              <h3 className="TitreFilm3"> Aventuraid </h3>
              <img src={bohemian_rhapsody} className="img_film4" alt="Image du film 3" />
              <h3 className="TitreFilm4"> Aventuraid </h3>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
