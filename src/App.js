import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import AddForm from './AddForm';
import MovieDetail from './MovieDetail'; // Si vous avez un composant MovieDetail pour les détails des films
import Movies from './Movies';
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'; // Importez les composants nécessaires



function App() {

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [movies, setMovies] = useState(Movies);
  
  return (
    <Router>
      <div className="App">
        {/* Routes et Composants */}
        <Routes>
          {/* Route pour la liste des films */}
          <Route path="/" element={
            <div className='container'>
              <div className='row'>
                <MovieList allmovies={movies} className="row" />
              </div>
            </div>
          } />

          {/* Route pour les détails d'un film */}
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />

          {/* Route pour le formulaire d'ajout */}
          <Route path="/add-movie" element={<AddForm setMovies={setMovies} />} />
        </Routes>
        <span id="line"></span>
      </div>
    </Router>
  );
}

export default App;

