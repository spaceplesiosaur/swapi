import React from 'react'
import Header from '../../Header/Header'
import MoviesBox from '../MoviesBox/MoviesBox'
import PropTypes from 'prop-types'
import './MoviesPage.scss'
import BBAnimated from '../../BBAnimated/BBAnimated'

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
      <BBAnimated />
    </section>
  )
}

export default MoviesPage

MoviesPage.propTypes = {
  sys: PropTypes.object,
  user: PropTypes.object,
  logOut: PropTypes.func,
  movies: PropTypes.array,
  addMovies: PropTypes.func
}
