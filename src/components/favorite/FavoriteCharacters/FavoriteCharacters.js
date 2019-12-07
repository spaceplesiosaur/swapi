import React from 'react';
import CharacterCard from '../../CharacterCard/CharacterCard';
import './FavoriteCharacters.scss';
import FavoriteFilter from '../../FavoriteFilter/FavoriteFilter'

const FavoriteCharacters = ({favorites, removeFavorite}) => {
  const putCards = favorites.map((character,ind) => (
    <CharacterCard
      key={ind}
      character={character}
      isFavorite={true}
      removeFavorite={removeFavorite}
    />
  ))

  return (
    <section className="favorite-box">
      {putCards}
    </section>
  )
}

export default FavoriteCharacters
