import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../LoginPage/LoginPage'
import MoviesPage from '../MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: MoviesPage,
      user: {name: 'The Rock', rank: 'expert', quote: "I hate sand"}
    }
  }

  // changePage = (chosenPage) => {
  //   this.setState({currentPage: chosenPage})
  // }

  logOut = () => {
    this.setState({currentPage: LoginPage, user: {}})
  }

  render() {
    const Page = this.state.currentPage
    return (
      <main className="app">
        <Page
        user={this.state.user}
        logOut={this.logOut}
        />
      </main>
    )
  }
}
