import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import { shallow } from 'enzyme'
import FavoriteButton from './FavoriteButton'

describe('FavoriteButton', () => {
  let wrapper
  const addFavorite = jest.fn()
  const removeFavorite = jest.fn()
  const toggleCard = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <FavoriteButton
        card={characterResults[1]}
        isFavorite={true}
        toggleCard={toggleCard}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
      />)
  })

  it('should render FavoriteButton with all data passed in correctly and if isFavorite props is true', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleCard prop when button was clicked', () => {
    wrapper.find('img').simulate('click')

    expect(toggleCard).toHaveBeenCalled()
  })

  it('should call removeFavorite prop when button was clicked and got isFavorite prop as true', () => {
    wrapper.find('img').simulate('click')

    expect(removeFavorite).toHaveBeenCalled()
  })

  describe("if isFavorite prop is false", () => {
    let wrapperUnfavorite

    beforeEach(() => {
      wrapperUnfavorite = shallow(
        <FavoriteButton
          card={characterResults[1]}
          isFavorite={false}
          toggleCard={toggleCard}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />)
    })

    it('should render FavoriteButton with all data passed in correctly and if isFavorite props is false', () => {
      expect(wrapperUnfavorite).toMatchSnapshot()
    })

    it('should call addFavorite prop when button was clicked and got isFavorite prop as false', () => {

      wrapperUnfavorite.find('img').simulate('click')

      expect(addFavorite).toHaveBeenCalled()
    })
  })
})
