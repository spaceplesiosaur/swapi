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

  it("should match snapshot if toLoginPage state is true", () => {
    wrapper.setState({toLoginPage: true})

    expect(wrapper).toMatchSnapshot()
  })

  it("should call redirect prop after button was clicked", () => {
    const spy = jest.spyOn(wrapper.instance(), 'redirect').mockImplementation(arg => arg)
    wrapper.instance().forceUpdate()

    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it("should call logOut prop if redirect is called", () => {
    wrapper.instance().redirect()

    expect(logOut).toHaveBeenCalled()
  })

  it("should change toLoginPage state if redirect is called", () => {
    expect(wrapper.state('toLoginPage')).toEqual(false)

    wrapper.instance().redirect()

    expect(wrapper.state('toLoginPage')).toEqual(true)
  })
})
