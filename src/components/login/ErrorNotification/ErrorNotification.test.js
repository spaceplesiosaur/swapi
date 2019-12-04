import React from 'react'
import {shallow} from 'enzyme'
import ErrorNotification from './ErrorNotification'

it ('should match the snapshot with all data passed in correctly', () => {
  const error = shallow(<ErrorNotification />)
  expect(error).toMatchSnapshot()
})
