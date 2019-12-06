import React, { Component } from 'react';
import './App.scss';
import fakeMovies from '../../mockData/fakeMovies.js'
// import fakeCharacters from '../../mockData/fakeCharacters.js'
import { getMoviesData } from '../../apiCalls/apiCalls'
import LoginPage from '../login/LoginPage/LoginPage'
import MoviesPage from '../movies/MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'
import { Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: 'The Rock',
        quote: "I hate sand",
        rank: 'expert'},
      movies: [ ],
      favorite: [ ],
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

  render() {
    return (
      <main className="app">
        <Route exact path='/' render={() => <LoginPage addUser={this.addUser}/>} />

        <Route exact path='/movies' render={() => <MoviesPage
          sys={this.state.sys}
          user={this.state.user}
          logOut={this.logOut}
          movies={this.state.movies}
          addMovies={this.addMovies}/>} />

        <Route path='/movies/:id' render={({ match }) => {
          console.log("MATCH", match)
          const specificMovie = this.state.movies.find(info => info.episode_id === parseInt(match.params.id))
          console.log("MOOOVIE", this.state.movies)
          return (
            <div>
            <CharactersPage
            id={match.params.id}
            movie={specificMovie}
            user={this.state.user}
            logOut={this.logOut}
            addMovies={this.addMovies}
            movies={this.state.movies}
            />
            </div>
          )
        }} />

      </main>
    )
  }
}
