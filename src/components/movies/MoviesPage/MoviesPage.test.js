import React from 'react'
import { shallow } from 'enzyme'
import movieResults from '../../../mockData/fakeMovies.js'
import MoviesPage from './MoviesPage'

describe("MoviesPage", () => {

  it('should render MoviesPage with all data passed in correctly', () => {
    const wrapper = shallow(
      <MoviesPage
        sys={{
          isLoaded: true,
          error: ''
        }}
        user={{
          name: 'Padme',
          quote: "Rock is smooth",
          rank: 'expert'}}
        logOut={jest.fn()}
        movies={movieResults}
        addMovies={jest.fn()}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})
