import React from 'react'
import { shallow } from 'enzyme'
import UserProfile from './UserProfile'


describe("UserProfile", () => {
  let wrapper
  const logOut = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <UserProfile
        name={"The Rock"}
        quote={'I hate sand'}
        rank={'expert'}
        logOut={logOut}
      />
    )
  })

  it("should render UserProfile", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("should call logOut prop after button was clicked", () => {
    wrapper.find('button').simulate('click')
    expect(logOut).toHaveBeenCalled()
  })
})
