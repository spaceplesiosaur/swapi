import React from 'react';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';

describe("MovieCard", ()=> {

  it('should render MovieCard', () => {
    const wrapper = shallow(
      <MovieCard
        episode={1}
        title={"Baz Lerman's Sarah Plain And Tall"}
        year={'1999'}
        scroll={"Words on a page"}
        changePage={jest.fn()}
        setSharedData={jest.fn()}/>
  );
    expect(wrapper).toMatchSnapshot();
  })
})
