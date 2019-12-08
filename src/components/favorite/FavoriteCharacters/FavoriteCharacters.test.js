import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import FavoriteCharacters from './FavoriteCharacters'

describe('FavoriteCharacters', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteCharacters
        key={'card1'}
        isFavorite={false}
        character={characterResults[0]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />);
  })

  it('should render FavoriteCharacters with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
