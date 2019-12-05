import React from 'react';
import './CharacterCard.scss';
import FavoriteButton from '../FavoriteButton/FavoriteButton'

const CharacterCard = ({name, species, planet, population, films, addFavoriteCard}) => {

  const filmList = () => {
    films.map(film => {
      return <li>{film}</li>
    })
  }

  return (
    <section className="character-card">
      <header>
        <h3>{name}</h3>
        <p>{species}</p>
      </header>
      <section className="character-card-planet">
      <div>
        <p>{planet}:</p>
        <p>{population}</p>
      </div>
      <ul>
        <h4 className="character-movies-header">Movies:</h4>
        {filmList}
      </ul>
      </section>
      <footer>
        <FavoriteButton card={name, species, planet, population, films} addFavoriteCard={addFavoriteCard} /> 
      </footer>
    </section>
  )
}

export default CharacterCard;
