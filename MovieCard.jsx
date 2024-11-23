import React from 'react';

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <li>
      <img src={imageUrl} alt={movie.title} />
      <h3>{movie.title}</h3>
    </li>
  );
}