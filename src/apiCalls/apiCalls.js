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

export const getCharacterData = (array) => {
  return array.map((character, index) => {
    return fetch(character)
    .then(response => response.json())
  })
}
