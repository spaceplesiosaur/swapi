import React from 'react';
import './UserProfile.scss'
import userImage from '../../images/death-star.svg'

const UserProfile = ({name, rank, quote, logOut}) => {

  return (
    <section className="user-profile">
      <img src={userImage}></img>
      <section>
        <h3>{name}:<span> {rank}</span></h3>
        <p>{quote}</p>
      </section>
      <button onClick={logOut}>Log Out</button>
    </section>
  )
}

export default UserProfile;
