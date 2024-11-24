import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, searchTerm, onMovieSelect }) { // Recibir la prop onMovieSelect
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul>
      {filteredMovies.map((movie) => (
        <MovieCard 
        key={movie.id} 
        movie={movie} 
        onMovieSelect={onMovieSelect} /> // Pasar onMovieSelect a MovieCard
      ))}
    </ul>
  );
}

