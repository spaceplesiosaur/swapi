import React, { Component } from 'react'
import './FavoriteButton.scss'
import emptyStar from '../../images/star.svg'
import fullStar from '../../images/full-star.svg'

class FavoriteButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleChange = () => {
    this.setState({isActive: !this.state.isActive})
    this.props.addFavoriteCard(this.props.card)
  }

  render() {
    const star = (this.state.isActive === true) ? fullStar : emptyStar
    return (
      <img
        src={star}
        alt="star"
        role="button"
        className="star-button"
        onClick={this.handleChange}/>
    )
  }
}

export default FavoriteButton
