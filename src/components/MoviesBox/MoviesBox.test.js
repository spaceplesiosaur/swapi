import React from 'react';
import { shallow } from 'enzyme';
import MoviesBox from './MoviesBox';
import MovieCard from '../MovieCard/MovieCard';

describe("MoviesBox", () => {

  it("should render MoviesBox", () => {
    const wrapper = shallow(
      <MoviesBox
      />
    )
  })

  it("should generate cards from state", () => {
    const wrapper = shallow(<MoviesBox />)
    const fakeMovie1 = {
      title: "A Star War",
      episode_id: 4,
      director: "The Rock",
      producer: "Mr. Tumnus",
      release_date: "1977-05-25"
    }
    const fakeMovie2 = {
        title: "The Fast and the Furious",
        episode_id: 3,
        director: "Dominic Toretto",
        producer: "Cars",
        release_date: "2001-05-25"
    }
    const fakeMovie3 = {
        title: "Bambi",
        episode_id: 2,
        director: "Michael Bay",
        producer: "Somebody Nobody",
        release_date: "2005-05-25"
    }
    wrapper.setState({cards: [fakeMovie1, fakeMovie2, fakeMovie3]})
    const expected1 = ( <MovieCard
        title = "Bambi"
        episode = "2"
        year = "2005"
        /> )
    const expected2 = ( <MovieCard
        title = "The Fast and the Furious"
        episode = "3"
        year = "2001"
        /> );

      expect(wrapper.instance().generateCards().length).toEqual(3);
      expect(wrapper.instance().generateCards()[2].props.title).toEqual(expected1.props.title);

  })
})
