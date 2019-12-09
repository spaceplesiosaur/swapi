export const getMoviesData = () => {
  return fetch('https://swapi.co/api/films/')
    .then(response => {
      if (!response.ok) {
        throw Error('Movies wasn\'t fetched')
      }
      return response.json()
    })
    .then(movies => movies.results.sort((a, b) => {
      return a.episode_id - b.episode_id
    }))
    .then(movies => movies.map(movie => {
      const { title, episode_id, opening_crawl, release_date, characters } = movie
      return { title, episode_id, opening_crawl, release_date, characters }
    }))
}

export const getAnyData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn't fetched`)
      }
      return response.json()
    })
}
