import React from 'react';
import './CharacterCard.scss';

const CharacterCard = () => {

  return (
    <section className="character-card">
      <header>
        <h3></h3>
        <img></img>
        <p></p>
      </header>
      <section className="character-card-planet">
      <div>
        <p></p>
        <p></p>
      </div>
      <ul>
        <h4 className="character-movies-header"></h4>
        {/* Movie list placeholder*/}
      </ul>
      </section>
    </section>
  )
}

export default CharacterCard;
