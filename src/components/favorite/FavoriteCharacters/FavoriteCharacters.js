import React from 'react'
import CharacterCard from '../../CharacterCard/CharacterCard'
import NoFavoritesPage from '../NoFavoritesPage/NoFavoritesPage'
import PropTypes from 'prop-types'
import './FavoriteCharacters.scss'

const FavoriteCharacters = ({favorites, removeFavorite}) => {
  const putCards = favorites.length? favorites.map((character,ind) => (
    <CharacterCard
      key={ind}
      character={character}
      isFavorite={true}
      removeFavorite={removeFavorite}
    />
  )) : <NoFavoritesPage />

  return (
    <section className="favorite-box">
      {putCards}
    </section>
  )
}

export default FavoriteCharacters

FavoriteCharacters.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object),
  removeFavorite: PropTypes.func.isRequired
}
