import React from 'react'
import './MovieCard.scss'
import { NavLink } from 'react-router-dom'

const MovieCard = (props) => {
  const year = props.release_date.split('-')[0]
  
  return (
    <section className="movie-card">
      <h3>Episode {props.id}</h3>
      <h4>{props.title}</h4>
      <p>{year}</p>

      <button>
        <NavLink
          to={`/movies/${props.id}`}
          key={props.id}
          className="view-chr">View characters</NavLink>
      </button>

    </section>
  )
}

export default MovieCard;
