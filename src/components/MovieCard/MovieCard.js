import React from 'react';
import './MovieCard.scss';

const MovieCard = ({episode, title, year}) => {

  return (
    <section className="movie-card">
      <h3>Episode {episode}</h3>
      <h4>{title}</h4>
      <p>{year}</p>
      <button>View characters</button>
    </section>
  )
}

export default MovieCard;
