import React from 'react';
import './UserProfile.scss'
import userImage from '../../images/death-star.svg'

const UserProfile = ({name, quote, rank, logOut}) => {

  return (
    <section className="user-profile">
      <div style={{backgroundImage: `url(${userImage})`}}></div>
      <section>
        <h3>{name}<span> {rank}</span></h3>
        <p>{quote}</p>
        <button onClick={logOut}>Log Out</button>
      </section>
    </section>
  )
}

export default UserProfile;
