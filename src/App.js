
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import AddForm from './AddForm';
import Movies from './Movies';
import { useState } from 'react';



function App() {

  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [movies, setMovies] = useState(Movies);
  

  // const usedMovies = movies.filter(
  //   movie => {
  //     if(movie.title !== '' || rating !== '' ) {
  //       return (object.title.toLowerCase().includes(title.toLowerCase()) && object.rating > Number(rating));
  //     }
  //     return true;
  //   }
  // );


  return (
    <div className="App">
      {/* <Filter Title = {title} Rating = {rating} SetTitle = {setTitle} SetRating = {setRating}></Filter> */}
      <div className='container'>
        <div className='row'>
          <MovieList allmovies = {movies} className = "row"></MovieList>
        </div>
      </div>
      <span id = "line"></span>
      {/* <AddForm SetMovies={setMovies}></AddForm> */}
    </div>
  );
}

export default App;
