import React from 'react';
import CharactersPage from './CharactersPage';
import { shallow } from 'enzyme';

describe('CharactersPage', () => {
  it('should render CharactersPage', () => {
    const wrapper = shallow(
      <CharactersPage
      sharedData={{episode: 1, title: "fast and furious"}}
      user={{name: "The Rock"}}
      logOut={jest.fn()}
      />
    )
  })
})
