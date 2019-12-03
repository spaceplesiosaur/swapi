import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieBox.scss';

export default class MovieBox extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <section className="movieBox">
        <MovieCard />
        {/* The above is a placeholder; this will be a const variable representing a mapping over the cards array   */}
      </section>
    )
  }
}
