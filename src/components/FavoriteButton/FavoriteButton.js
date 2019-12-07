import React from 'react'
import './FavoriteButton.scss'
import emptyStar from '../../images/star.svg'
import fullStar from '../../images/full-star.svg'

const FavoriteButton = (props) => {

  const star = (props.isFavorite === true) ? fullStar : emptyStar

  const toggleChange = () => {
    (!props.isFavorite)
      ? props.addFavorite(props.card)
      : props.removeFavorite(props.card.name)

    props.toggleCard()
  }

  return (
    <img
      src={star}
      alt="star"
      role="button"
      className="star-button"
      onClick={toggleChange}/>
  )
}

export default FavoriteButton
