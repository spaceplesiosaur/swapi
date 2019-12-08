import React from 'react'
import characterResults from '../../../mockData/fakeCharacters.js'
import movieResults from '../../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import FavoritesPage from './FavoritesPage'

describe('FavoritesPage', () => {

  it('should render FavoritesPage with all data passed in correctly', () => {
    const wrapper = shallow(
      <FavoritesPage
        user={{
          name: 'Taylor Swift',
          quote: "I find your lack of faith disturbing",
          rank: 'intermediate'}}
        favorites={[characterResults[1], characterResults[2]]}
        removeFavorite={jest.fn()}
      />);

    expect(wrapper).toMatchSnapshot()
  })
})
