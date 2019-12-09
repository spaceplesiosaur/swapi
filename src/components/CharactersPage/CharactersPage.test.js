import React from 'react'
import CharactersPage from './CharactersPage'
import movieResults from '../../mockData/fakeMovies.js'
import { getMoviesData } from '../../apiCalls/apiCalls'
import { shallow } from 'enzyme'

describe('CharactersPage', () => {
  let wrapper
  const addMovies = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <CharactersPage
        id='2'
        movie={{
          title: 'The Phantom Menace',
          release_date: '1999-05-19',
          episode_id: 1,
          opening_crawl: 'Turmoil has engulfed the, Galactic Republic.',
          characters: ['C-3PO']
        }}
        user={{
          name: 'Taylor Swift',
          quote: "I find your lack of faith disturbing",
          rank: 'intermediate'}}
        logOut={jest.fn()}
        favorites={[]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />
    )
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
