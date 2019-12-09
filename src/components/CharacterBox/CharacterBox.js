import React, { Component } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import fakeCharacters from '../../mockData/fakeCharacters.js'
import { getAnyData } from '../../apiCalls/apiCalls'
import './CharacterBox.scss'

export default class CharacterBox extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    const limitedCharacters = this.props.characters.slice(0, 10);
    const characterPromises = limitedCharacters.map((character, index) => {
      return getAnyData(character, 'Character');
    })

    const makePromises = Promise.all(characterPromises)
      .then(promises => promises.map(promise => {

        const characterName = promise.name;
        const speciesFetch = getAnyData(promise.species, 'Species').then(data => data.name)
        const planetFetch = getAnyData(promise.homeworld, 'Planet').then(data => {return {planetName: data.name, planetPopulation: data.population}})
        const filmsFetch = Promise.all(promise.films.map((film, index) => {
          return getAnyData(film, `accociated film ${index + 1}`)
          .then(data => data.title)}))
          .then(data => {return data})


        return Promise.all([speciesFetch, planetFetch, filmsFetch])
        .then(info => {
          // NOTE: I need scrshot of it
          console.log('INFOOOO', info)  
          return {name: characterName, species: info[0], planet: info[1].planetName, population: info[1].planetPopulation, films: info[2]}})
        .then(characterStats => {this.setState({characters: [...this.state.characters, characterStats]})})
    }))
  }

  // componentDidMount = () => {
  //   const limitedCharacters = this.props.characters.slice(0, 10)
  //   const characterPromises = limitedCharacters.map(character => {
  //     return fetch(character)
  //     .then(response => response.json())
  //     .catch(err => {
  //       this.setState({characters: [...this.state.characters, character]})
  //     })
  //   })
  //
  //   return Promise.all(characterPromises)
  //     .then(promises => promises.map(promise => {
  //
  //       const characterName = promise.name;
  //
  //       const speciesFetch =
  //       fetch(promise.species)
  //       .then(res => res.json())
  //       .then(data => data.name)
  //
  //       const planetFetch =
  //       fetch(promise.homeworld)
  //       .then(res => res.json())
  //       .then(data => {return {planetName: data.name, planetPopulation: data.population}})
  //
  //       const filmsPromises =
  //       promise.films.map(film => {
  //         return fetch(film)
  //         .then(res => res.json())
  //         .then(data => data.title)
  //       })
  //
  //       const filmsFetch =
  //       Promise.all(filmsPromises)
  //       .then(data => {return data})
  //
  //       return Promise.all([speciesFetch, planetFetch, filmsFetch])
  //       .then(info => {return {name: characterName, species: info[0], planet: info[1].planetName, population: info[1].planetPopulation, films: info[2]}})
  //       .then(characterStats => {this.setState({characters: [...this.state.characters, characterStats]})})
  //     }))
  //
  //
  //   }


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
