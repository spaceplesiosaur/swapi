import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import fakeMovies from '../../mockData/fakeMovies.js'
import { getAnyData } from '../../apiCalls/apiCalls'
import LoginPage from '../login/LoginPage/LoginPage'
import MoviesPage from '../movies/MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'
import FavoritesPage from '../favorite/FavoritesPage/FavoritesPage'
import Page404 from '../Page404/Page404'
import C3POcatchPage from '../C3POcatchPage/C3POcatchPage'
import NoFavoritesPage from '../NoFavoritesPage/NoFavoritesPage'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: 'The Rock',
        quote: "I hate sand",
        rank: 'expert'},
      movies: [ ],
      favorites: [],
      sys: {
        isLoaded: false,
        error: ''
      }
    }
  }

  addMovies = () => {
    getAnyData('https://swapi.co/api/films/', 'Movies')
      .then(movies => movies.results.sort((a, b) => {
        return a.episode_id - b.episode_id
      }))
      .then(movies => movies.map(movie => {
        const { title, episode_id, opening_crawl, release_date, characters } = movie
        return { title, episode_id, opening_crawl, release_date, characters }
      }))
      .then(movies => {
        this.setState({
          movies,
          sys: {...this.state.sys, isLoaded: true}
        })
      })
      .catch(err => {
        this.setState({
          movies: fakeMovies,
          sys: {isLoaded: false, error: err}
        })
      })
  }

  addUser = (user) => {
     this.setState({ user })
  }

  logOut = () => {
    this.setState({ user: {} })
  }

  addFavorite = (card) => {
    this.setState({ favorites: [...this.state.favorites, card]})
  }

  removeFavorite = (name) => {
    const unFavorite =  this.state.favorites.filter(character => character.name !== name )
    this.setState({favorites: unFavorite})
  }

  render() {
    return (
      <main className="app">
        <Switch>

          <Route exact path='/' render={() => <LoginPage addUser={this.addUser}/>} />

          <Route exact path='/movies' render={() => {
            return (this.state.sys.error !== '')
              ? <C3POcatchPage />
              : <MoviesPage
                user={this.state.user}
                logOut={this.logOut}
                movies={this.state.movies}
                addMovies={this.addMovies}
                isLoaded={this.state.sys.isLoaded}
              />
          }

          } />

          <Route path='/movies/:id' render={({ match }) => {
            if (match.params.id > 7) { return <Page404 /> }

            const specificMovie = this.state.movies.find(info => info.episode_id === parseInt(match.params.id))

            return (!specificMovie)
              ? this.addMovies()
              : <CharactersPage
                  id={match.params.id}
                  movie={specificMovie}
                  user={this.state.user}
                  logOut={this.logOut}
                  favorites={this.state.favorites}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
                  />
          }} />

          <Route exact path='/favorites' render={() => {
            return (!this.state.favorites.length)
              ? <NoFavoritesPage />
              : <FavoritesPage
                  user={this.state.user}
                  logOut={this.logOut}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                  />
          }} />

          <Route path="*" component={Page404} />

        </Switch>
      </main>
    )
  }
}
