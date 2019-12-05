import React from 'react';
import './CharacterCard.scss';

const CharacterCard = ({name, species, planet, population, films}) => {

  const filmList = () => {
    films.map(film => {
      return <li>{film}</li>
    })
  }

  return (
    <section className="character-card">
      <header>
        <h3>{name}</h3>
        <img></img>
        <p>{species}</p>
      </header>
      <section className="character-card-planet">
      <div>
        <p>{planet}</p>
        <p>{population}</p>
      </div>
      <ul>
        <h4 className="character-movies-header"></h4>
        {filmList}
      </ul>
      </section>
    </section>
  )
}

export default CharacterCard;
