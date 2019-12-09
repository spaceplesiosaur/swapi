import React, { Component } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { getAnyData } from '../../apiCalls/apiCalls'
import PropTypes from 'prop-types'
import './CharacterBox.scss'

export default class CharacterBox extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    return this.addCharacters()
  }

  speciesFetch = (url) => {
    return getAnyData(url, 'species')
      .then(data => {return {species: data.name}})
  }

  planetFetch = (url) => {
    return getAnyData(url, 'planet')
      .then(data => {return {planet: data.name, population: data.population}})
  }

  filmsFetch = (url) => {
    return Promise.all(url.map((film, index) => {
      return getAnyData(film, `accociated film ${index + 1}`)
        .then(data => data.title)}))
        .then(data => {return {films: data}})
    }

  nestedCharacterFetch = (promise) => {
    const { name, species, films, homeworld} = promise
    return Promise.all([
      this.speciesFetch(species),
      this.planetFetch(homeworld),
      this.filmsFetch(films)
    ]).then(info => {
        return {name, ...info[0], ...info[1], ...info[2]}
      })
      .then(characterStats => {
        this.setState({characters: [...this.state.characters, characterStats]})
      })
  }

  makePromises = (listOfPromises) => {
    return Promise.all(listOfPromises)
      .then(promises => promises.map(promise => {
        return this.nestedCharacterFetch(promise)
      }))
    }

  addCharacters = () => {
    const limitedCharacters = this.props.characters.slice(0, 10);
    const characterPromises = limitedCharacters.map((character, index) => {
      return getAnyData(character, 'Character');
    })
    this.makePromises(characterPromises )
  }

  generateCharacters = () => {
    return this.state.characters.map((character, ind) => {
      const isFavorite = !!this.props.favorites.find(fav => fav.name === character.name)
      return (
        <CharacterCard
          key={'card' + ind+1}
          isFavorite={isFavorite}
          character={character}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
        />
    )
    })
  }

  render() {
    return (
      <section className="character-box">
        {this.generateCharacters()}
      </section>
    )
  }
}

CharacterBox.propTypes = {
  favorites: PropTypes.array,
  characters: PropTypes.array,
  addMovies: PropTypes.func,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
}
