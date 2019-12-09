import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import CharacterBox from './CharacterBox'
import CharacterCard from '../CharacterCard/CharacterCard'

describe('CharacterBox', () => {
  let wrapper, characters

  beforeEach(() => {
    characters = movieResults.map(movie => movie.characters)

    wrapper = shallow(
      < CharacterBox
        favorites={[characterResults[1]]}
        characters={['C-3PO']}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />)
  })

  it('should render CharacterBox with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should create character cards when generateCharacters is called', () => {

    wrapper.instance().setState({characters: [characterResults[0]]})

    expect(wrapper.instance().generateCharacters().length).toEqual(1)
  })
})
