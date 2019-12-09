import React, { Component } from 'react'
import CharacterBox from '../CharacterBox/CharacterBox'
import './CharactersPage.scss'
import Header from '../Header/Header'
import FavoriteFilter from '../FavoriteFilter/FavoriteFilter'
import PropTypes from 'prop-types'

export default class CharactersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount = () => {
    this.props.addMovies()
  }

  render() {
    return !this.props.movie ? null: (
      <section className="characters-page">
        <Header
          user={this.props.user}
          logOut={this.props.logOut}
          headerText={`Episode ${this.props.movie.episode_id}: ${this.props.movie.title}`}
          isButton={true} />
        <main className="crawl-text">
          <section>
            <div>
              <h4>{this.props.movie.title}</h4>
              <p>{this.props.movie.opening_crawl}</p>
            </div>
          </section>
        </main>
        <div>
          <h3>All Movie Characters</h3>
          <FavoriteFilter number={this.props.favorites.length}/>
        </div>
        <CharacterBox
          favorites={this.props.favorites}
          characters={this.props.movie.characters}
          addMovies={this.props.addMovies}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
        />
      </section>
    )
  }
}

CharactersPage.propTypes = {
  id: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  addMovies: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
}
