import React from 'react';
import CharacterCard from '../../CharacterCard/CharacterCard';
import './FavoriteCharacters.scss';
import FavoriteFilter from '../../FavoriteFilter/FavoriteFilter'

const FavoriteCharacters = ({favorites}) => {
  const putCards = favorites.map((character,ind) => (
    <CharacterCard
      key={ind}
      name={character.name}
      species={character.species}
      planet={character.planet}
      population={character.population}
      films={character.films}
    />
  ))

  return (
    <section className="favorite-box">
      {putCards}
    </section>
  )
}

export default FavoriteCharacters
