import React from 'react'
import { shallow } from 'enzyme'
import FavoriteFilter from './FavoriteFilter'

describe('FavoriteFilter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteFilter number={2} />)
  })

  it('should render FavoritesFilter with all data passed in correctly and toFavorite state is false', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render FavoritesFilter with Redirect component if toFavorite state is true', () => {
    wrapper.setState({toFavorite: true})
    expect(wrapper).toMatchSnapshot()
  })

  it('should call redirect with all data passed in correctly', () => {
    const spy = jest.spyOn(wrapper.instance(), 'redirect').mockImplementation(arg => arg)
    wrapper.instance().forceUpdate()

    wrapper.find('button').simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  it('should update state if redirect was called', () => {
    expect(wrapper.state('toFavorite')).toEqual(false)

    wrapper.instance().redirect()

    expect(wrapper.state('toFavorite')).toEqual(true)
  })
})
