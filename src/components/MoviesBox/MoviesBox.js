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

  componentDidMount = () => {
    fetch('https://swapi.co/api/films/')
    .then(response => response.json())
    .then(data => this.setState({cards: data.results.sort((a, b) => {return a.episode_id - b.episode_id})}))
  }
  generateCards = () => {
    return this.state.cards.map(card => {
      return (
        <MovieCard
        key={Date.now() + Math.random()}
        episode={card.episode_id}
        title={card.title}
        year={card.release_date.slice(0, (card.release_date.length -6))}
        />
      )
    })
  }

  render() {
    return (
      <section className="movie-box">
        {this.generateCards()}
      </section>
    )
  }
}
