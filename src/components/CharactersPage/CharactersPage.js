import React, { Component } from 'react'
import CharacterBox from '../CharacterBox/CharacterBox'
import './CharactersPage.scss'
import Header from '../Header/Header'
import FavoriteFilter from '../FavoriteFilter/FavoriteFilter'

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
          headerText={`Episode ${this.props.movie.episode_id}: ${this.props.movie.title}`} />
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
