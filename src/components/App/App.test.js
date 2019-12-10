import React from 'react'
import App from './App'
import characterResults from '../../mockData/fakeCharacters.js'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import { getAnyData } from '../../apiCalls/apiCalls'

jest.mock('../../apiCalls/apiCalls')

describe("App", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(< App />, { wrapper: BrowserRouter })
  })

  it('should render App', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call function to fetch api data', () => {
    getAnyData.mockImplementation(() => {
      return Promise.resolve([{ title: 'movie one' }])
    })

    wrapper.instance().addMovies()

    expect(getAnyData).toHaveBeenCalled()
  })

  it('should update state with new user when addUser is called', () => {
    const mockUser = {
      name: 'Taylor Swift',
      quote: "I find your lack of faith disturbing",
      rank: 'intermediate'}

    const expected = mockUser

    expect(wrapper.state('user')).toEqual({
      name: 'The Rock',
      quote: "I hate sand",
      rank: 'expert'})

    wrapper.instance().addUser(mockUser)

    expect(wrapper.state('user')).toEqual(expected)
  })

  it('should update state with no user when logOut is called', () => {

    expect(wrapper.state('user')).toEqual({
      name: 'The Rock',
      quote: "I hate sand",
      rank: 'expert'})

    wrapper.instance().logOut()

    expect(wrapper.state('user')).toEqual({})
  })

  it('should update state with favorites array when addFavorite is called', () => {
    const mockFavoriteCharacter = characterResults[0]
    const expected = [mockFavoriteCharacter]

    expect(wrapper.state('favorites')).toEqual([])

    wrapper.instance().addFavorite(mockFavoriteCharacter)

    expect(wrapper.state('favorites')).toEqual(expected)
  })

  it('should remove correct character from state when removeFavorite is called', () => {
    const mockFavorites = characterResults
    const expected = [
      {name: "Luke", species: "human", planet: "Tatioone", population: 20000, films: ['bambi', 'little women', 'sound of music'], isFavorite: false},
      {name: "Darth Vadar", species: "robot", planet: "Tatioone", population: 50000, films: ['punch drunk love'], isFavorite: true},
      {name: "Han", species: "human", planet: "Millenium Falcon", population: 60000, films:['cinderella'], isFavorite: false}
    ]

    wrapper.instance().setState({favorites: mockFavorites})

    wrapper.instance().removeFavorite(characterResults[1].name)
    wrapper.instance().removeFavorite(characterResults[2].name)

    expect(wrapper.state('favorites')).toEqual(expected)
  })

})
