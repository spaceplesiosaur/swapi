import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';


describe("UserProfile", () => {

  it("should render UserProfile", () => {
    const wrapper = shallow(
      <UserProfile
      user={{name: "The Rock"}}
      logOut={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot();
  })

})
