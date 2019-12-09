import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './FavoriteFilter.scss'

class FavoriteFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toFavorite: false
    }
  }

  redirect = () => {
    this.setState({toFavorite: true})
  }

  render() {
    return (
      (this.state.toFavorite)
        ? <Redirect to='/favorites' />
        : <button
            className='filter-button '
            onClick={this.redirect}>see favorite characters ({this.props.number})
          </button>
    )
  }
}

export default FavoriteFilter

FavoriteFilter.propTypes = {
  number: PropTypes.number
}
