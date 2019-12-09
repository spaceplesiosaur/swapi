import React from 'react'
import { shallow } from 'enzyme'
import MoviesBox from './MoviesBox'

describe("MoviesBox", () => {
  const mockProps = [{
    title: 'The Phantom Menace',
    release_date: '1999-05-19',
    episode_id: 1,
    opening_crawl: 'Turmoil has engulfed the Galactic Republic.',
    characters: ['C-3PO']
  }]

  const addMovies = jest.fn()

  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <MoviesBox
        movies={mockProps}
        addMovies={addMovies}
      />
    )
  })

  it("should render MoviesBox", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call addMovies props after rendering", () => {
    expect(addMovies).toHaveBeenCalled()
  })

  it("should call generateCards after rendering", () => {
    const spy = jest.spyOn(wrapper.instance(), 'generateCards').mockImplementation(arg => arg)
    wrapper.instance().forceUpdate()

    expect(spy).toHaveBeenCalled()
  })
})
