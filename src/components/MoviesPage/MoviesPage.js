import React from 'react';
import UserProfile from '../UserProfile/UserProfile';
import MoviesBox from '../MoviesBox/MoviesBox';
import './MoviesPage.scss';

const MoviesPage = ({user, sharedData, logOut, changePage, setSharedData}) => {

  return (
    <section className="moviePage">
      <header>
        <h2>Star Wars Movies</h2>
        <UserProfile
        {...user}
        logOut={logOut}
         />
      </header>
      <MoviesBox
      sharedData={sharedData}
      changePage={changePage}
      setSharedData={setSharedData}
      />
    </section>
  )
}

export default MoviesPage;
