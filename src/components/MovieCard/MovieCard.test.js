import React from 'react';
import MovieCard from './MovieCard';
import { shallow } from 'enzyme';

describe("MovieCard", ()=> {


  it('should render MovieCard', () => {
    const wrapper = shallow(<MovieCard
    />);
    expect(wrapper).toMatchSnapshot();
  })

  
})
