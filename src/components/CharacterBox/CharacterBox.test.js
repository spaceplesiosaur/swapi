import React from 'react'
import characterResults from '../../mockData/fakeCharacters.js'
import movieResults from '../../mockData/fakeMovies.js'
import { shallow } from 'enzyme'
import CharacterBox from './CharacterBox'
import CharacterCard from '../CharacterCard/CharacterCard'
import { getAnyData } from '../../apiCalls/apiCalls'

jest.mock('../../apiCalls/apiCalls')

describe('CharacterBox', () => {
  let wrapper, characters, instance

  beforeEach(() => {
    characters = movieResults.map(movie => movie.characters)

    wrapper = shallow(
      < CharacterBox
        favorites={[characterResults[1]]}
        characters={['C-3PO']}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />)
    instance = wrapper.instance()
  })

  it('should render CharacterBox with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call generateCharacters after rendering', () => {
    const spy = jest.spyOn(instance, 'generateCharacters').mockImplementation(arg => arg)
    instance.forceUpdate()

    expect(spy).toHaveBeenCalled()
  })

  it('should call addCharacters after rendering', async () => {
    const spy = jest.spyOn(instance, 'addCharacters').mockImplementation(() => {
      return Promise.resolve([{ name: 'C-3PO' }])
    })

    await instance.componentDidMount()

    expect(spy).toHaveBeenCalled()
  })

  it('should call getAnyData in all nested functions to fetch api data', () => {
    getAnyData.mockImplementation(() => {
      return Promise.resolve([{ name: 'C-3PO' }])
    })

    instance.addCharacters()

    expect(getAnyData).toHaveBeenCalledTimes(5)
  })

  it('should call makePromises as a nested fetch for addCharacters method', async () => {
    const spy = jest.spyOn(instance, 'makePromises').mockImplementation(() => {
      return Promise.resolve([{ name: 'C-3PO' }])
    })

    await instance.addCharacters()

    expect(spy).toHaveBeenCalled()
  })

  it('should call nestedCharacterFetch as a nested fetch for makePromises method', async () => {
    const mockSpecies = async () => {
      return {species: 'human'};
    }

    const spy = jest.spyOn(instance, 'nestedCharacterFetch').mockImplementation(() => {
      return Promise.resolve([{ name: 'C-3PO' }])
    })

    await instance.makePromises([mockSpecies])

    expect(spy).toHaveBeenCalled()
  })

  describe("nestedCharacterFetch method", () => {
    let mockCharacter

    beforeEach(() => {
      mockCharacter = {
        name: 'C-3PO',
        species: '/linkToSpecies',
        films: ['/linkToFilmOne'],
        homeworld: '/linkToHomeworld'
      }
    })

    it('should call speciesFetch as a nested fetch', async () => {
      const spy = jest.spyOn(instance, 'speciesFetch').mockImplementation(() => {
        return Promise.resolve([{ species: 'human' }])
      })

      await instance.nestedCharacterFetch(mockCharacter)

      expect(spy).toHaveBeenCalled()
    })

    it('should call planetFetch as a nested fetch', async () => {
      const spy = jest.spyOn(instance, 'planetFetch').mockImplementation(() => {
        return Promise.resolve([{ species: 'human' }])
      })

      await instance.nestedCharacterFetch(mockCharacter)

      expect(spy).toHaveBeenCalled()
    })

    it('should call filmsFetch as a nested fetch', async () => {
      const spy = jest.spyOn(instance, 'filmsFetch').mockImplementation(() => {
        return Promise.resolve([{ species: 'human' }])
      })

      await instance.nestedCharacterFetch(mockCharacter)

      expect(spy).toHaveBeenCalled()
    })
  })
})
