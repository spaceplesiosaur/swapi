import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './BackButton.scss'

export default class BackButton extends Component {
  constructor() {
    super()
    this.state = {
      isRedirected: false
    }
  }

  redirect = () => {
    this.setState({isRedirected: true})
  }

  render() {
    return (
      (this.state.isRedirected)
        ? <Redirect to='/movies' />
        : <button
          className="back-btn"
          onClick={this.redirect}>back to all movies</button>
    )
  }
}
