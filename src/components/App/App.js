import React, { Component } from 'react';
import './App.scss';
import LoginPage from '../LoginPage/LoginPage'
import MoviesPage from '../MoviesPage/MoviesPage'
import CharactersPage from '../CharactersPage/CharactersPage'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: LoginPage
    }
  }

  render() {
    const Page = this.state.currentPage
    return (
      <main className="app">
        <Page />
      </main>
    )
  }
}
