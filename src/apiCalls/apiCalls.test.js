import { getAnyData } from './apiCalls'
describe('getAnyData', () => {
  let mockMovieData =
     [
      {
        title: "Revenge of the Sith",
        episode_id: 3,
        opening_crawl: "War! The Republic is crumbling",
        release_date: "2005-05-19",
        characters: ["Padme", "Princess Leia"]
      },
      {
        title: "Revenge of the Sloth",
        episode_id: 4,
        opening_crawl: "Sleep! There is nothing to do today",
        release_date: "2009-05-19",
        characters: ["Petme", "Princess Leaf"]
      }
    ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockMovieData)
        }
      })
    })
  })

  it('should be passed down the correct URL', () => {
    getAnyData('https://swapi.co/api/films/', 'Movie')
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films/')
  })

  it('should return an array the correct values types', () => {
    expect(getAnyData('https://swapi.co/api/films/', 'Movie')).resolves.toEqual(mockMovieData)
  })
  it('should return an error for response that is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getAnyData('https://swapi.co/api/films/', 'Movie')).rejects.toEqual(Error("Movie wasn't fetched"))
  })
})
