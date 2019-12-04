import React from 'react';
import { shallow } from 'enzyme';
import MoviesPage from './MoviesPage';

describe("MoviesPage", () => {

  it('should render MoviesPage', () => {
    const wrapper = shallow(
      <MoviesPage
      user={"The Rock"}
      logOut={jest.fn()}
      />)
    expect(wrapper).toMatchSnapshot();
  })
})
