import React from 'react'
import characterResults from '../../../mockData/fakeCharacters.js'
import { shallow } from 'enzyme'
import FavoriteCharacters from './FavoriteCharacters'

describe('FavoriteCharacters', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteCharacters
        favorites={[characterResults[1]]}
        removeFavorite={jest.fn()}
      />)
  })

  it('should render FavoriteCharacters with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
