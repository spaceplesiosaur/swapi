import React from 'react'
import {shallow} from 'enzyme'
import LoginInput from './LoginInput'

describe("LoginInput", () => {
  let mockProps, input
  const toggleChangeState = jest.fn()

  beforeEach(() => {
    mockProps = {
      key: 'name',
      type: 'name',
      value: 'Skywalker',
      toggleChangeState: toggleChangeState
    }

    input = shallow(<LoginInput {...mockProps} />)
  })

  it ('should match the snapshot with all data passed in correctly', () => {
    expect(input).toMatchSnapshot()
  })

  it('should call toggleChangeState prop when input is changed', () => {
    input.find('input').simulate(
      'change',
      { target: { value: 'Yoda'}
    })

    expect(toggleChangeState).toHaveBeenCalled()
  })
})
