import React from 'react'
import './FavoritesPage.scss';
import FavoriteCharacters from '../FavoriteCharacters/FavoriteCharacters'
import Header from '../../Header/Header'


const FavoritesPage = (props) => {
  return (
    <section className="favorite-page">
      <Header
        headerText={"My Favorite Characters"}
        user={props.user}
      />
      <FavoriteCharacters {...props} />
    </section>
  )
}


export default FavoritesPage;
