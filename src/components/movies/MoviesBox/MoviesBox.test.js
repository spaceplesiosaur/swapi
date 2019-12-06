import React from 'react';
import { shallow } from 'enzyme';
import MoviesBox from './MoviesBox';
import MovieCard from '../MovieCard/MovieCard';

describe("MoviesBox", () => {

  it("should render MoviesBox", () => {
    const mockProps = [{
      title: "A Star War",
      episode_id: 4,
      director: "The Rock",
      producer: "Mr. Tumnus",
      release_date: "1977-05-25",
      opening_crawl: "paaaam-pam paaaaam-pam pa-pa-paaaam"
    }]
    const wrapper = shallow(
      <MoviesBox moveies={mockProps}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })
})
