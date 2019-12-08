import React from 'react';
import MovieCard from './MovieCard';
import movieResults from '../../../mockData/fakeMovies.js'
import { shallow } from 'enzyme';

describe("MovieCard", ()=> {

  it('should render MovieCard', () => {
    const wrapper = shallow(
      <MovieCard
        id={1}
        {...movieResults[1]}
      />
  );
    expect(wrapper).toMatchSnapshot();
  })
})
