import React from 'react'
import { shallow } from 'enzyme'
import MoviesBox from './MoviesBox'

describe("MoviesBox", () => {
  const mockProps = [{
    title: "A Star War",
    episode_id: 4,
    director: "The Rock",
    producer: "Mr. Tumnus",
    release_date: "1977-05-25",
    opening_crawl: "paaaam-pam paaaaam-pam pa-pa-paaaam"
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
