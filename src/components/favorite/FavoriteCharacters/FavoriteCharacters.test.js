import React from 'react'
import characterResults from '../../../mockData/fakeCharacters.js'
import movieResults from '../../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import FavoriteCharacters from './FavoriteCharacters'

describe('FavoriteCharacters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteCharacters
        favorites={[characterResults[1], characterResults[2]]}
        removeFavorite={jest.fn()}
      />);
  })

  it('should render FavoriteCharacters with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
