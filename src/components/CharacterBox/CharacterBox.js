import React, { Component } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import { getAnyData } from '../../apiCalls/apiCalls'
import PropTypes from 'prop-types'
import './CharacterBox.scss'
import ArtooLoading from '../ArtooLoading/ArtooLoading'
import C3POCard from '../C3POCard/C3POCard'

export default class CharacterBox extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      isLoaded: false,
      error: ''
    }
  }

  componentDidMount() {
    this.addCharacters()
  }

  speciesFetch = (url) => {
    return getAnyData(url, 'species')
      .then(data => {return {species: data.name}})
      .catch(error => this.setState({error: error}))
  }

  planetFetch = (url) => {
    return getAnyData(url, 'planet')
      .then(data => {return {planet: data.name, population: data.population}})
      .catch(error => this.setState({error: error}))
  }

  filmsFetch = (url) => {
    return Promise.all(url.map((film, index) => {
      return getAnyData(film, `accociated film ${index + 1}`)
        .then(data => data.title)}))
        .then(data => {return {films: data}})
        .catch(error => this.setState({error: error}))
    }

  nestedCharacterFetch = (promise) => {
    const { name, species, films, homeworld} = promise
    return Promise.all([
      this.speciesFetch(species),
      this.planetFetch(homeworld),
      this.filmsFetch(films)
    ])
      .then(info => {
        return {name, ...info[0], ...info[1], ...info[2]}
      })
      .then(characterStats => {
        this.setState({characters: [...this.state.characters, characterStats], isLoaded: true})
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
      return getAnyData(character, 'Character')
        .catch(error => this.setState({error: error}))
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
      (this.state.error !== '')
        ? <C3POCard />
        : <section className="character-box">
          {(this.state.isLoaded)
            ? this.generateCharacters()
            : <ArtooLoading />
          }
        </section>
    )
  }
}

CharacterBox.propTypes = {
  favorites: PropTypes.array,
  characters: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
}
