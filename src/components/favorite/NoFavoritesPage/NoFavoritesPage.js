import React from 'react'
import './NoFavoritesPage.scss'
import yoda from '../../../images/yoda.png'
//image was taken from uihere.com free clipart https://www.uihere.com/free-cliparts/yoda-count-dooku-luke-skywalker-anakin-skywalker-c-3po-wars-clipart-2869780

const NoFavoritesPage = () => {
  return (
    <div class="yodaContainer">
    <h2 class="no-favorites">Add some favorites, you must.</h2>
    <img src={yoda} class="yoda"></img>
  </div>)
}

export default NoFavoritesPage
