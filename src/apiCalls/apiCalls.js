export const getAnyData = (url, type) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(`${type} wasn't fetched`)
      }
      return response.json()
    })
}
