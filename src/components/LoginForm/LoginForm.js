import React, { Component } from 'react';
import './LoginForm.scss'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <form className="loginForm">
        <h1 className="loginHeader">SWAPI Trivia</h1>
        <section className="nameInputAndLabel">
          <label></label>
          <input></input>
        </section>
        <section className="quoteInputAndLabel">
          <label></label>
          <input></input>
        </section>
        <section className="triviaLevelButtons">
          <input type="radio">Novice</input>
          <input type="radio">Intermediate</input>
          <input type="radio">Expert</input>
        </section>
        <button>Submit</button>
      </form>
    )
  }
}
