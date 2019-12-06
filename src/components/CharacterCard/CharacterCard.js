import React from 'react';
import './CharacterCard.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton'

const CharacterCard = (props) => {

  const filmList = () => {
    return props.films.map(film => {
      return <li>{film}</li>
    })
  }

  return (
    <section className="character-card">
      <header>
        <h3>{props.name}</h3>
        <p>{props.species}</p>
      </header>
      <section className="character-card-planet">
      <div>
        <p>{props.planet}:</p>
        <p>{props.population}</p>
      </div>
      <ul>
        <h4 className="character-movies-header">Movies:</h4>
        {filmList()}
      </ul>
      </section>
      <footer>
        <FavoriteButton card={props.name, props.species, props.planet, props.population, props.films} addFavoriteCard={props.addFavoriteCard} />
      </footer>
    </section>
  )
}

export default CharacterCard;
