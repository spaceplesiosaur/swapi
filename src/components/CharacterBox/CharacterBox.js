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
      fetchNumber: 10,
      characters: [],
      isLoaded: false,
      error: ''
    }
  }
  componentDidMount() {
    if (!this.state.characters.length) {
      this.addCharacters()
    }
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
    const characterPromises = this.props.characters.map((character, index) => {
      return getAnyData(character, 'Character')
    })
    this.makePromises(characterPromises )
  }
  generateCharacters = () => {
    const limitedCharacters = this.state.characters.filter((chrt, ind) => (this.state.fetchNumber-10) <= ind && ind < this.state.fetchNumber)
    return limitedCharacters.map((character, ind) => {
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
  increaseFetchNumber = () => {
    this.setState({fetchNumber: this.state.fetchNumber + 10})
  }

  decreaseFetchNumber = () => {
    this.setState({fetchNumber: this.state.fetchNumber - 10})
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
          <div className="button-set">
            {
              this.state.fetchNumber > 10 &&
              (<button id="less-btn" onClick={this.decreaseFetchNumber}>less</button>)
            }
            {
              this.state.characters &&
              this.state.fetchNumber <= this.state.characters.length &&
              (<button id="more-btn" onClick={this.increaseFetchNumber}>more</button>)
            }
          </div>
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
