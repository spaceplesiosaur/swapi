import React from 'react';
import UserProfile from '../../UserProfile/UserProfile';
import Header from '../../Header/Header'
import MoviesBox from '../MoviesBox/MoviesBox';
import './MoviesPage.scss';

const MoviesPage = (props) => {
  return (
    <section className="moviePage">
      <Header
        headerText={'Star Wars Movies'}
        user={props.user}
        logOut={props.logOut}
      />
      <MoviesBox
        {...props.sys}
        movies={props.movies}
        addMovies={props.addMovies}
      />
    </section>
  )
}

export default MoviesPage;
