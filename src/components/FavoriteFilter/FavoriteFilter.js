import React, { Component } from 'react'
import './FavoriteFilter.scss'
import emptyStar from '../../images/star.svg'
import fullStar from '../../images/full-star.svg'

class FavoriteFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleChange = () => {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    const star = (this.state.isActive === true) ? fullStar : emptyStar
    const btnClass = (this.state.isActive === true) ? 'active-btn' : 'inactive' 
    return (
      <button
        className={'filter-button ' + btnClass}
        onClick={this.handleChange}>
        <img
          src={star}
          alt="star"
          role="button"
          className="star-button"/>
        Favorite
      </button>
    )
  }
}

export default FavoriteFilter
