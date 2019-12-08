import React from 'react';
import CharactersPage from './CharactersPage';
import movieResults from '../../mockData/fakeMovies.js'
import characterResults from '../../mockData/fakeCharacters.js'
import { getMoviesData } from '../../apiCalls/apiCalls'
import { shallow } from 'enzyme';

describe('CharactersPage', () => {
  it('should render CharactersPage', () => {
    const wrapper = shallow(
      <CharactersPage
        id={2}
        movie={movieResults[0]}
        user={{
          name: 'Taylor Swift',
          quote: "I find your lack of faith disturbing",
          rank: 'intermediate'}}
        logOut={jest.fn()}
        addMovies={jest.fn()}
        movies={movieResults}
        favorites={[]}
        addFavorite={jest.fn()}
        removeFavorite={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})
