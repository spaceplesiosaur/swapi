import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../login/LoginPage/LoginPage'
import MoviesPage from '../MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'
import { Route } from 'react-router-dom'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {name: 'The Rock', rank: 'expert', quote: "I hate sand"},
      sharedData: {}
    }
  }

  addUser = (user) => {
     this.setState({user, currentPage: MoviesPage})
  }

  setSharedData = (movieData) => {
    this.setState({sharedData: movieData})
  }
  goToCharactersPage = () => {
    this.setState({currentPage: CharactersPage})
  }

  logOut = () => {
    this.setState({currentPage: LoginPage, user: {}})
  }

  render() {
    const Page = this.state.currentPage
    return (
      <main className="app">
        <Route exact path='/' render={() => <LoginPage addUser={this.addUser}/>} />
        <Route exact path='/movies' render={() => <MoviesPage {...this.state} logOut={this.logOut} setSharedData={this.setSharedData}/>} />
        <Route exact path='/movies/:id' render={() => <CharactersPage {...this.state} logOut={this.logOut} setSharedData={this.setSharedData}/>
        }/>
      </main>
    )
  }
}
