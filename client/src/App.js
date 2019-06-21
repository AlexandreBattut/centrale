import React from 'react';
import './App.css';
import raid from './Raid.png'
import bohemian_rhapsody from './bohemian_rhapsody.jpg'
import green_book from './green_book.jpg'
import forrest_gump from './forrest_gump.jpg'
import ligne_verte from './ligne_verte.jpg'


function App() {  
  const superagent = require('superagent');

  const [movie1, setMovie] = React.useState(0);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/movie/Forrest Gump")
      .then(response => setMovie(response.body.movie));
  }, []);
  var [note,setNote]=React.useState(0);
  React.useEffect(()=> {
    superagent
        .put("http://localhost:5000/application/movie/Forrest Gump")
        .send({note:'3'})
        .end(function(resp){
    console.log('Got post', resp.body)
  })
        },[])

  const [movie2, setMovie2] = React.useState(0);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/movie/Bohemian Rhapsody")
      .then(response => setMovie2(response.body.movie));
  }, []);
  const [movie3, setMovie3] = React.useState(0);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/movie/La Ligne Verte")
      .then(response => setMovie3(response.body.movie));
  }, []);
  const [movie4, setMovie4] = React.useState(0);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/movie/Green Book : Sur Les Routes Du Sud")
      .then(response => setMovie4(response.body.movie));
  }, []);

  const [note_movie1, setnote_movie1] = React.useState(2);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/note/Forrest Gump")
      .then(response => setnote_movie1(response.body));
  }, []);

  const [note_movie2, setnote_movie2] = React.useState(2);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/note/Bohemian Rhapsody")
      .then(response => setnote_movie2(response.body));
  }, []);

  const [note_movie3, setnote_movie3] = React.useState(2);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/note/La Ligne Verte")
      .then(response => setnote_movie3(response.body));
  }, []);

  const [note_movie4, setnote_movie4] = React.useState(2);
  React.useEffect(() => {
    superagent
      .get("http://localhost:5000/application/note/Green Book : Sur Les Routes Du Sud")
      .then(response => setnote_movie4(response.body));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={raid} className="App-logo" alt="logo" />
        <h1 className="Titre">Netflix</h1>
        <form>
          <input placeholder="Rechercher un film" type="text"/>
        </form>
      </header>
      <body>
        <div className="Recommandé">

          <h2>Recommandé pour vous</h2>

          <div className="FilmsRecommandés">

              <img src={forrest_gump} className="img_film1" alt="Image du film 1" />
              <div className="Film1">
                  <h3 className="TitreFilm1"> {movie1.title} </h3>
                  <p> Auteur: {movie1.author} </p>
                  <p> Durée: {movie1.length} </p>
                  <p> Genre: {movie1.genre} </p>
                  <p> note moyenne: {note_movie1}/5 </p>
                <h4 className="vu?"> Avez vous vu ce film? Notez le ! </h4>


                <button className="but" onClick= {()=> {

                        superagent
                            .put("http://localhost:5000/application/note/1/user/Forrest Gump")
                            .send({"note": 1
                    }).end() }} >1/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Forrest Gump")
                        .send({"note": 2
                }).end() }} >2/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Forrest Gump")
                        .send({"note": 3
                }).end() }} >3/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Forrest Gump")
                        .send({"note": 4
                }).end() }} >4/5</button>


                    <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Forrest Gump")
                        .send({"note": 5
                }).end() }} >5/5</button>
                    <div class="bouton">
                          <p>

                         </p>
                        </div>
                    <a href="javascript:window.location.reload()" className="btn">Confirmer le vote</a>
              </div>



              <img src={bohemian_rhapsody} className="img_film2" alt="Image du film 2" />
              <div className="Film2">
                  <h3 className="TitreFilm2"> {movie2.title} </h3>
                  <p> Auteur: {movie2.author} </p>
                  <p> Durée: {movie2.length} </p>
                  <p> Genre: {movie2.genre} </p>
                  <p> note moyenne: {note_movie2}/5 </p>
                <h4 className="vu?"> Avez vous vu ce film? Notez le ! </h4>


                <button className="but" onClick= {()=> {

                        superagent
                            .put("http://localhost:5000/application/note/1/user/Bohemian Rhapsody")
                            .send({"note": 1
                    }).end() }} >1/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Bohemian Rhapsody")
                        .send({"note": 2
                }).end() }} >2/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Bohemian Rhapsody")
                        .send({"note": 3
                }).end() }} >3/5</button>

                     <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Bohemian Rhapsody")
                        .send({"note": 4
                }).end() }} >4/5</button>


                    <button onClick={()=> {
                        superagent
                        .put("http://localhost:5000/application/note/1/user/Bohemian Rhapsody")
                        .send({"note": 5
                }).end() }} >5/5</button>
                    <div class="bouton">
                          <p>

                         </p>
                        </div>
                    <a href="javascript:window.location.reload()" className="btn">Confirmer le vote</a>
              </div>

              <img src={ligne_verte} className="img_film3" alt="Image du film 3" />
              <div className="Film3">
                  <h3 className="TitreFilm3"> {movie3.title} </h3>
                  <p> Auteur: {movie3.author} </p>
                  <p> Durée: {movie3.length} </p>
                  <p> Genre: {movie3.genre} </p>
                  <p> note: {movie3.note}/5 </p>
              </div>

              <img src={green_book} className="img_film4" alt="Image du film 4" />
              <div className="Film4">
                  <h3 className="TitreFilm4"> {movie4.title} </h3>
                  <p> Auteur: {movie4.author} </p>
                  <p> Durée: {movie4.length} </p>
                  <p> Genre: {movie4.genre} </p>
                  <p> note: {movie4.note}/5 </p>
              </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
