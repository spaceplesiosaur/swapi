import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesBox.scss';

export default class MovieBox extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  getMovieInfo = () => {
    return null
  }
  generateCards = () => {
    return null
  }

  render() {
    return (
      <section className="movie-box">
        {this.generateCards()}
      </section>
    )
  }
}
