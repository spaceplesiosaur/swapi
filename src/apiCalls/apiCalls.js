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
