import React, { Component } from 'react';
import './LoginForm.scss'

export default class LoginForm extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <form className="login-form">
        <h1>SWAPI Trivia</h1>
        <section className="login-input">
          <label></label>
          <input></input>
        </section>
        <section className="login-input">
          <label></label>
          <input></input>
        </section>
        <section className="login-radio-buttons">
          <input type="radio">Novice</input>
          <input type="radio">Intermediate</input>
          <input type="radio">Expert</input>
        </section>
        <button>Submit</button>
      </form>
    )
  }
}
