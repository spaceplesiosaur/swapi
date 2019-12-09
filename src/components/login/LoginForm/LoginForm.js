import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './LoginForm.scss'
import LoginInput from '../LoginInput/LoginInput'
import LoginRadioButton from '../LoginRadioButton/LoginRadioButton'
import ErrorNotification from '../ErrorNotification/ErrorNotification'

export default class LoginForm extends Component {
  constructor(props) {
    super()
    this.state = {
      data: {
        name: '',
        quote: '',
        rank: 'novice'
      },
      toMoviesPage: false,
      error: false
    }
  }

  toggleChangeState = (type, value) => {
    switch (type) {
      case 'name':
        this.setState({data: {...this.state.data, name: value}, error: false})
        break;
      case 'favorite quote':
        this.setState({data: {...this.state.data, quote: value}, error: false})
        break;
      default:
        this.setState({data: {...this.state.data, rank: value}, error: false})
        break;
    }
  }

  submitUser = (event) => {
    event.preventDefault()
    return (!this.checkError())
      ? this.redirect()
      : this.setState({...this.state, error: true})
  }

  redirect = () => {
    this.props.addUser({...this.state.data})
    this.clearInputs()
    this.setState({toMoviesPage: true})
  }

  checkError = () => {
    const valName = this.state.data.name.replace(' ', '') === ''
    const valQuote = this.state.data.quote.replace(' ', '') === ''
    return (valName || valQuote)
  }

  clearInputs = () => {
    this.setState({data: {name: '', quote: '', rank: 'novice'}, error: false})
  }

  render() {

    const inputs = ['name', 'quote'].map(key => {
      const type = (key !== 'name') ? 'favorite quote' : key
      return (
        <LoginInput
          key={key}
          type={type}
          value={this.state.data[key]}
          toggleChangeState={this.toggleChangeState}/>
    )})

    const radios = ['novice', 'intermediate', 'expert'].map(rank => (
      <LoginRadioButton
        key={rank}
        type={rank}
        currentRank={this.state.data.rank}
        toggleChangeState={this.toggleChangeState}/>
    ))

    return (
      (this.state.toMoviesPage)
        ? <Redirect to='/movies' />
        : <form className="login-form">
          <h1>SWAPI Trivia</h1>
            {this.state.error && <ErrorNotification />}
            {inputs}
          <section className="login-radio-buttons">
            {radios}
          </section>
          <button onClick={this.submitUser}>Submit</button>
        </form>
    )
  }
}
