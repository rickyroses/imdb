import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './MovieList';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(  

        `https://api.themoviedb.org/3/movie/popular?api_key=4f573ea0aa920d51a123405a7ffd7a5c&language=es-ES`
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Buscador de Películas</h1>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <main>
        <MovieList movies={movies} searchTerm={searchTerm} />
      </main>
    </div>
  );
}
