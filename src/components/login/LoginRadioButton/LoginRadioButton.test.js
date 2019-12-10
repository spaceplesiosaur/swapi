import React from 'react'
import {shallow} from 'enzyme'
import LoginRadioButton from './LoginRadioButton'

describe("LoginRadioButton", () => {
  let mockProps, radio
  const toggleChangeState = jest.fn()

  beforeEach(() => {
    mockProps = {
      key: 'expert',
      type: 'expert',
      currentRank: 'novice',
      toggleChangeState: toggleChangeState
    }
    radio = shallow(<LoginRadioButton {...mockProps} />)
  })

  it ('should match the snapshot with all data passed in correctly', () => {
    expect(radio).toMatchSnapshot()
  })

  it('should call toggleChangeState prop when radio button is changed', () => {
    radio.find('input').simulate(
      'change',
      { target: { value: 'novice'}
    })

    expect(toggleChangeState).toHaveBeenCalled()
  })
})
