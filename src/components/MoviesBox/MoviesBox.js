import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import fakeMovies from '../../mockData/fakeMovies.js';
import fakeCharacters from '../../mockData/fakeCharacters.js'
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
    .then(data => data.results.sort((a, b) => {return a.episode_id - b.episode_id}))
    .then(data => {
      this.setState({cards: data})
      console.log(data)
    })
    .catch(err => {
      console.log(err)
      this.setState({cards: fakeMovies})
    })
  }

  generateCards = () => {
    return this.state.cards.map((card, index) => {
      return (
        <MovieCard
        key={index}
        id={index+1}
        episode={card.episode_id}
        title={card.title}
        year={card.release_date.slice(0, (card.release_date.length - 6))}
        scroll={card.opening_crawl}
        characters={card.characters}
        changePage={this.props.changePage}
        setSharedData={this.props.setSharedData}
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
