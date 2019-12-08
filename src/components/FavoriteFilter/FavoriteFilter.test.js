import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import FavoriteFilter from './FavoriteFilter'

describe('FavoriteFilter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteFilter
        number={2}
      />);
  })

  it('should render FavoritesFilter with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
