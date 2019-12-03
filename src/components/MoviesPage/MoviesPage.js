import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import MoviesBox from '../MoviesBox/MoviesBox';
import './MoviesPage.scss';


const MoviesPage = () => {

  return (
    <section className="moviePage">
      <section className="userProfile">
        <UserProfile />
      </section>
      <h2>Star Wars Movies</h2>
      <MoviesBox />
    </section>
  )
}

export default MoviesPage;
