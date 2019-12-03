import React from 'react';
import '/.CharacterCard.scss';

const CharacterCard = () => {

  return (
    <section className="characterCard">
      <h3 className="characterName"></h3>
      <img className="favoriteStar"></img>
      <p className="characterSpecies"></p>
      <div></div>
      <section className="characterPlanetInfo">
        <img className="planetIcon"></img>
        <p className="planetName"></p>
        <p className="planetPopulation"></p>
      </section>
      <h4 className="characterMoviesHeader"></h4>
      <ul>
        {/* Movie list placeholder*/}
      </ul>
    </section>
  )
}

export default CharacterCard;
