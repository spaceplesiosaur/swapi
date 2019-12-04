import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import MoviesBox from '../MoviesBox/MoviesBox';
import './MoviesPage.scss';


const MoviesPage = ({user, logOut}) => {

  return (
    <section className="moviePage">
      <section className="userProfile">
        <UserProfile
        name={user.name}
        rank={user.rank}
        quote={user.quote}
        logOut={logOut}
         />
      </section>
      <h2>Star Wars Movies</h2>
      <MoviesBox />
    </section>
  )
}

export default MoviesPage;
