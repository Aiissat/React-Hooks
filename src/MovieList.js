import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'; // Importer les composants nécessaires


function MovieList({ allmovies }) {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      {allmovies.map(movie => (
        <Card key={movie.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.description.slice(0, 100)}...</Card.Text>
            <Link to={`/movie/${movie.id}`}>
              <Button variant="primary">Voir les détails</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default MovieList;

//fin
