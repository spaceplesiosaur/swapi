import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import fakeMovies from '../../mockData/fakeMovies.js'
import { getMoviesData } from '../../apiCalls/apiCalls'
import LoginPage from '../login/LoginPage/LoginPage'
import MoviesPage from '../movies/MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'
import FavoritesPage from '../favorite/FavoritesPage/FavoritesPage'
import Page404 from '../Page404/Page404'


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
    getMoviesData()
      .then(movies => {
        this.setState({
          ...this.state,
          movies,
          sys: {...this.state.sys, isLoaded: true}
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          movies: fakeMovies,
          sys: {...this.state.sys, error: err}
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
    this.setState({...this.state, favorites: [...this.state.favorites, card]})
  }

  removeFavorite = (name) => {
    const unFavorite =  this.state.favorites.filter(character => character.name !== name )
    this.setState({...this.state, favorites: unFavorite})
  }

  render() {
    return (
      <main className="app">
        <Switch>
          <Route exact path='/' render={() => <LoginPage addUser={this.addUser}/>} />

          <Route exact path='/movies' render={() => <MoviesPage
            sys={this.state.sys}
            user={this.state.user}
            logOut={this.logOut}
            movies={this.state.movies}
            addMovies={this.addMovies}/>} />

          <Route path='/movies/:id' render={({ match }) => {
            const specificMovie = this.state.movies.find(info => info.episode_id === parseInt(match.params.id))
            return (
              <CharactersPage
                id={match.params.id}
                movie={specificMovie}
                user={this.state.user}
                logOut={this.logOut}
                addMovies={this.addMovies}
                movies={this.state.movies}
                favorites={this.state.favorites}
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                />
            )
          }} />

          <Route exact path='/favorites' render={() => <FavoritesPage
            user={this.state.user}
            favorites={this.state.favorites}
            removeFavorite={this.removeFavorite}
            />} />

          <Route path="*" component={Page404} />
        </Switch>
      </main>
    )
  }
}
