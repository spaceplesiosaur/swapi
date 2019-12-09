import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MovieCard.scss'

class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toCharactersPage: false
    }
  }

  redirect = () => {
    this.setState({toCharactersPage: true})
  }

  render() {
    const year = this.props.release_date.split('-')[0]

    return (
      (this.state.toCharactersPage)
        ? <Redirect to={`/movies/${this.props.id}`} />
        : <section className="movie-card">
          <h3>Episode {this.props.id}</h3>
          <h4>{this.props.title}</h4>
          <p>{year}</p>
          <button onClick={this.redirect}>View characters</button>
        </section>
    )
  }
}



export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  episode_id: PropTypes.number.isRequired,
  opening_crawl: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired
}
