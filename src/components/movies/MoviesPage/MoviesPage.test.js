import React from 'react'
import { shallow } from 'enzyme'
import movieResults from '../../../mockData/fakeMovies.js'
import MoviesPage from './MoviesPage'

describe("MoviesPage", () => {

  it('should render MoviesPage with all data passed in correctly', () => {
    const wrapper = shallow(
      <MoviesPage
        user={{
          name: 'Padme',
          quote: "Rock is smooth",
          rank: 'expert'}}
        logOut={jest.fn()}
        movies={movieResults}
        addMovies={jest.fn()}
        isLoaded={true}
      />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render MoviesPage if data is loading', () => {
    const wrapper = shallow(
      <MoviesPage
        user={{
          name: 'Padme',
          quote: "Rock is smooth",
          rank: 'expert'}}
        logOut={jest.fn()}
        movies={movieResults}
        addMovies={jest.fn()}
        isLoaded={false}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})
