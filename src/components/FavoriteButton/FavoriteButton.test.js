import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import FavoriteButton from './FavoriteButton'

describe('FavoriteButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteButton
        card={characterResults[1]}
        isFavorite={true}
        toggleCard={jest.fn()}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />);
  })

  it('should render FavoriteButton with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
