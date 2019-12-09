import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import UserProfile from '../UserProfile/UserProfile'
import BackButton from '../BackButton/BackButton'

const Header = (props) => {
  const { headerText, user, logOut, isButton } = props
  return (
    <header className="header">
      {isButton && <BackButton />}
      <h2>{headerText}</h2>
      <UserProfile
        {...user}
        logOut={logOut}
      />
    </header>
  )
}

export default Header

Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
  headerText: PropTypes.string,
  isButton: PropTypes.bool
}
