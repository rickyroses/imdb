import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    backgroundColor: '#333', // Color de fondo más oscuro
    color: 'white', // Color del texto en blanco para que se lea bien
  }
};

function MovieModal({ isOpen, onClose, movie }) {
  if (!movie) {
    return null; 
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Detalles de la película" style={customStyles}>
      <button onClick={onClose}>Cerrar</button>
      <h2>{movie.title}</h2>
      <img src={imageUrl} alt={movie.title} />
      <p>{movie.overview}</p>
      {/* Aquí puedes agregar más detalles de la película */}
    </Modal>
  );
}

export default MovieModal;