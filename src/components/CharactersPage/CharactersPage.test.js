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
        id={2}
        movie={movieResults[0]}
        user={{
          name: 'Taylor Swift',
          quote: "I find your lack of faith disturbing",
          rank: 'intermediate'}}
        logOut={jest.fn()}
        addMovies={addMovies}
        movies={movieResults}
        favorites={[]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />
    )
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if no movie data was passed', () => {
    const wrapperWithoutProps = shallow(
      <CharactersPage addMovies={addMovies}/>)
    expect(wrapperWithoutProps).toMatchSnapshot()
  })

  it('should call addMovies prop after rendering', () => {
    expect(addMovies).toHaveBeenCalled()
  })
})
