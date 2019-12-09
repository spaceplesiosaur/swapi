export const getMoviesData = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => {
      if (!response.ok) {
        throw Error('Movies wasn\'t fetched')
      }
      return response.json()
    })
    .then(data => data.results.sort((a, b) => {
      return a.episode_id - b.episode_id
    }))
}

export const getAnyData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn\'t fetched`)
      }
      return response.json()
    })
}

// const getCharacterData = (array) => {
//   return array.map((character, index) => {
//     return fetch(character)
//     .then(response => response.json())
//   })
// }
//
// const makePromises = Promise.all(getCharacterData)
//   .then(promises => promises.map(promise => {
//
//     const characterName = promise.name;
//
//     return Promise.all([speciesFetch(promise), planetFetch(promise), filmsFetch(promise)])
//     .then(info => {return {name: characterName, species: info[0], planet: info[1].planetName, population: info[1].planetPopulation, films: info[2]}})
//     .then(characterStats => {this.setState({characters: [...this.state.characters, characterStats]})})
//   }))
//
//   const speciesFetch = (promise) => {
//     fetch(promise.species)
//     .then(res => res.json())
//     .then(data => data.name)
//   }
//
//   const planetFetch = (promise) => {
//     fetch(promise.homeworld)
//     .then(res => res.json())
//     .then(data => {return {planetName: data.name, planetPopulation: data.population}})
//   }
//
//   const filmsFetch = (promise) => {
//     const filmsPromises = promise.films.map(film => {
//       return fetch(film)
//       .then(res => res.json())
//       .then(data => data.title)
//
//       return Promise.all(filmsPromises)
//       .then(data => {return data})
//     })
//   }
