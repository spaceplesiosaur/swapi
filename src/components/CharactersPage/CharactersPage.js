import React, { Component } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import CharacterBox from '../CharacterBox/CharacterBox';
import { Route } from 'react-router-dom';
import './CharactersPage.scss';
import Header from '../Header/Header'

export default class CharactersPage extends Component {
  constructor() {
    super()
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
          header={`Episode ${this.props.movie.episode_id}: {this.props.movie.title}`} />
        <main className="crawl-text">
          <section>
            <div>
              <h4>{this.props.movie.title}</h4>
              <p>{this.props.movie.opening_crawl}</p>
            </div>
          </section>
        </main>
        <CharacterBox
          characters={this.props.movie.characters}
          addMovies={this.props.addMovies}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
        />

      </section>
    )
  }
}
