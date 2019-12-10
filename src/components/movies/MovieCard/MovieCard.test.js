import React from 'react'
import MovieCard from './MovieCard'
import { shallow } from 'enzyme'

describe("MovieCard", ()=> {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        id={1}
        title='The Phantom Menace'
        release_date='1999-05-19'
        episode_id={1}
        opening_crawl='Turmoil has engulfed the Galactic Republic.'
        characters={['C-3PO']}
      />
    )
  })

  it('should render MovieCard', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot if toCharactersPage state is true', () => {
    wrapper.setState({toCharactersPage: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should call redirect after button was clicked', () => {
    const spy = jest.spyOn(wrapper.instance(), 'redirect').mockImplementation(arg => arg)
    wrapper.instance().forceUpdate()

    wrapper.find('button').simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should change toCharactersPage state if redirect is called', () => {
    expect(wrapper.state('toCharactersPage')).toEqual(false)

    wrapper.instance().redirect()

    expect(wrapper.state('toCharactersPage')).toEqual(true)
  })
})
