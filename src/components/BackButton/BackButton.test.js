import React from 'react'
import { shallow } from 'enzyme'
import BackButton from './BackButton'

describe("BackButton", () => {
  let button

  beforeEach(() => {
    button = shallow(<BackButton />)
  })

  it("should match snapshot if isRedirected state is false", () => {
    expect(button).toMatchSnapshot()
  })

  it("should match snapshot if isRedirected state is true", () => {
    button.setState({isRedirected: true})

    expect(button).toMatchSnapshot()
  })

  it("should call redirect when button is clicked", () => {
    const spy = jest.spyOn(button.instance(), 'redirect').mockImplementation(arg => arg)
    button.instance().forceUpdate()

    button.find('button').simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  it("should change isRedirected state when redirect is called", () => {
    expect(button.state('isRedirected')).toEqual(false)

    button.instance().redirect()

    expect(button.state('isRedirected')).toEqual(true)
  })
})
