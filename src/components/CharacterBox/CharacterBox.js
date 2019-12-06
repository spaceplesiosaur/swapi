import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterBox.scss';
import FavoriteCharacters from '../FavoriteCharacters/FavoriteCharacters'

export default class CharacterBox extends Component {
  constructor() {
    super()
    this.state = {
      characters: []
    }
  }
  
  componentDidMount = () => {
    const limitedCharacters = this.props.characters.slice(0, 10)

    const characterPromises = limitedCharacters.map(character => {
      return fetch(character)
      .then(response => response.json())
      .catch(err => {
        this.setState({characters: [...this.state.characters, character]})
      })
    })

    const characterFacts = Promise.all(characterPromises)
      .then(promises => promises.map(promise => {

        const characterName = promise.name;

        const speciesFetch =
        fetch(promise.species)
        .then(res => res.json())
        .then(data => data.name)

        const planetFetch =
        fetch(promise.homeworld)
        .then(res => res.json())
        .then(data => {return {planetName: data.name, planetPopulation: data.population}})

        const filmsPromises =
        promise.films.map(film => {
          fetch(film)
          .then(res => res.json())
          .then(data => data.title)
        })

        const filmsFetch =
        Promise.all(filmsPromises)

        const characterInfo =
        Promise.all([speciesFetch, planetFetch, filmsFetch])
        .then(info => {return {name: characterName, species: info[0], planet: info[1].planetName, population: info[1].planetPopulation, films: info[2]}})
        .then(characterStats => {this.setState({characters: [...this.state.characters, characterStats]})})
      }))
    }


  generateCharacters = () => {
    return this.state.characters.map(character => {
      return (
      <CharacterCard
      key={Date.now() + Math.random()}
      name={character.name}
      species={character.species}
      planet={character.planet}
      population={character.population}
      films={character.films}
      addFavoriteCard={this.addFavoriteCard}
      />
    )
    })
  }

  addFavoriteCard = (card) => {
    this.setState({...this.state, favorite: [...this.state.favorite, card]})
  }

  render() {
    return (
      <section className="character-box">
        {
          //<FavoriteCharacters favorite={this.state.favorite} />
          // NOTE: this is `/favorite` block with favorite cards
        }
        {this.generateCharacters()}
      </section>
    )
  }
}
