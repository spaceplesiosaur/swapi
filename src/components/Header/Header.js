import React from 'react'
import UserProfile from '../UserProfile/UserProfile'
import './Header.scss'

const Header = ({headerText, user, logOut}) => {
  return (
    <header className="header">
      <h2>{headerText}</h2>
      <UserProfile
        {...user}
        logOut={logOut}
      />
    </header>
  )
}

export default Header
