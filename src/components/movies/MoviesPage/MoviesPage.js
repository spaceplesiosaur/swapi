import React from 'react'
import Header from '../../Header/Header'
import MoviesBox from '../MoviesBox/MoviesBox'
import PropTypes from 'prop-types'
import './MoviesPage.scss'
import BBAnimated from '../../BBAnimated/BBAnimated'
import ArtooLoading from '../../ArtooLoading/ArtooLoading'

const MoviesPage = (props) => {
  const chooseRobot = () => {
    return props.isLoaded === undefined ?
    <ArtooLoading /> : <BBAnimated />
  }
  return (
    <section className="moviePage">
      <Header
        headerText={'Star Wars Movies'}
        user={props.user}
        logOut={props.logOut}
      />
      <MoviesBox
        movies={props.movies}
        addMovies={props.addMovies}
      />
      {chooseRobot()}
    </section>
  )
}

export default MoviesPage

MoviesPage.propTypes = {
  user: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addMovies: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool
}
