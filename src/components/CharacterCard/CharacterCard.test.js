import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import { shallow } from 'enzyme'
import CharacterCard from './CharacterCard'

describe('CharacterCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <CharacterCard
        key={'card1'}
        isFavorite={true}
        character={characterResults[0]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />)
  })

  it('should render CharacterCard with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state isFavorite based on recieved prop after rendering', () => {
    expect(wrapper.state('isFavorite')).toEqual(true)
  })

  it('should toggle state isFavorite when toggleCard is called', () => {
    expect(wrapper.state('isFavorite')).toEqual(true)

    wrapper.instance().toggleCard()

    expect(wrapper.state('isFavorite')).toEqual(false)
  })
})
