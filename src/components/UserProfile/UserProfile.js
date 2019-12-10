import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './UserProfile.scss'
import userImage from '../../images/death-star.svg'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toLoginPage: false
    }
  }

  redirect = () => {
    this.props.logOut()
    this.setState({toLoginPage: true})
  }

  render() {
    const {name, quote, rank} = this.props

    return (
      (this.state.toLoginPage)
        ? <Redirect to='/' />
        : <section className="user-profile">
          <div style={{backgroundImage: `url(${userImage})`}}></div>
          <section>
            <h3>{name}<span> {rank}</span></h3>
            <p>{quote}</p>
            <button onClick={this.redirect}>Log Out</button>
          </section>
        </section>
    )
  }
}


export default UserProfile

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired
}
