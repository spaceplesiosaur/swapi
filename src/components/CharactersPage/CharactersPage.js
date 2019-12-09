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

  render() {
    const { movie, favorites, addFavorite, removeFavorite } = this.props
    const { episode_id, title, opening_crawl, characters } = movie
    return (
      <section className="characters-page">
        <Header
          user={this.props.user}
          logOut={this.props.logOut}
          headerText={`Episode ${episode_id}: ${title}`}
          isButton={true} />
        <main className="crawl-text">
          <section>
            <div>
              <h4>{title}</h4>
              <p>{opening_crawl}</p>
            </div>
          </section>
        </main>
        <div>
          <h3>All Movie Characters</h3>
          <FavoriteFilter number={favorites.length}/>
        </div>
        <CharacterBox
          favorites={favorites}
          characters={characters}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
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
  favorites: PropTypes.arrayOf(PropTypes.object),
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
}
