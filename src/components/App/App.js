import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../login/LoginPage/LoginPage'
import MoviesPage from '../MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: MoviesPage,
      user: {name: 'The Rock', rank: 'expert', quote: "I hate sand"},
      sharedData: {}
    }
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
        <Page
        user={this.state.user}
        sharedData={this.state.sharedData}
        logOut={this.logOut}
        changePage={this.goToCharactersPage}
        setSharedData={this.setSharedData}
        />
      </main>
    )
  }
}
