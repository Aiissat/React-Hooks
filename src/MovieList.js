import MovieCard from './MovieCard';

function MovieList ({allmovies})  {
  return (
    allmovies.map(movie => {
      return(
        <MovieCard key={movie.id} title={movie.title} description={movie.description} posterUrl={movie.posterUrl} rating={movie.rating} />
      );
    })
  
  );   
}
 
    
 

export default MovieList;
