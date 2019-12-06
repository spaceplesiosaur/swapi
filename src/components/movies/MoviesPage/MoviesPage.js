import React from 'react';
import UserProfile from '../../UserProfile/UserProfile';
import MoviesBox from '../MoviesBox/MoviesBox';
import './MoviesPage.scss';

const MoviesPage = (props) => {
  return (
    <section className="moviePage">
      <header>
        <h2>Star Wars Movies</h2>
        <UserProfile
          {...props.user}
          logOut={props.logOut}
         />
      </header>
      <MoviesBox
        {...props.sys}
        movies={props.movies}
        addMovies={props.addMovies}
      />
    </section>
  )
}

export default MoviesPage;
