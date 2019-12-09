import React from 'react'
import './FavoritesPage.scss';
import FavoriteCharacters from '../FavoriteCharacters/FavoriteCharacters'
import Header from '../../Header/Header'
import PropTypes from 'prop-types'


const FavoritesPage = (props) => {
  return (
    <section className="favorite-page">
      <Header
        headerText={"My Favorite Characters"}
        user={props.user}
        logOut={props.logOut}
        isButton={true}
      />
      <FavoriteCharacters
        favorites={props.favorites}
        removeFavorite={props.removeFavorite} />
    </section>
  )
}


export default FavoritesPage;

FavoritesPage.propTypes = {
  user: PropTypes.object,
  favorites: PropTypes.array,
  logOut: PropTypes.func,
  removeFavorite: PropTypes.func
}
