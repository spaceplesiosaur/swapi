import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import CharacterBox from './CharacterBox'
import CharacterCard from '../CharacterCard/CharacterCard'

describe('CharacterBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      < CharacterBox
        favorites={[characterResults[1], characterResults[3]]}
        characters={movieResults.map(movie => movie.characters)}
        addMovies={jest.fn()}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />);
  })

  it('should render CharacterBox with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should create character cards when generateCharacters is called', () => {
    wrapper.instance().setState({characters: [characterResults[0], characterResults[1]]})
    const expected = [
        <CharacterCard
          key={'card1'}
          isFavorite={false}
          character={characterResults[0]}
          addFavorite={jest.fn()}
          removeFavorite={jest.fn()}
        />,
        <CharacterCard
          key={'card2'}
          isFavorite={true}
          character={characterResults[1]}
          addFavorite={jest.fn()}
          removeFavorite={jest.fn()}
        />
    ]
    expect(wrapper.instance().generateCharacters().length).toEqual(expected.length)
  })
})
