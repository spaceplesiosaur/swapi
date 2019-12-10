import React from 'react'
import './NoFavoritesPage.scss'
import yoda from '../../../images/yoda.png'

const NoFavoritesPage = () => {
  return (
    <div class="yodaContainer">
    <h2 class="no-favorites">Add some favorites, you must.</h2>
    <img src={yoda} class="yoda"></img>
  </div>)
}

export default NoFavoritesPage
