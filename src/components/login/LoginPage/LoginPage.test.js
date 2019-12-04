import React from 'react'
import {shallow} from 'enzyme'
import LoginPage from './LoginPage'

it ('should match the snapshot with all data passed in correctly', () => {
  const page = shallow(<LoginPage addUser={jest.fn()} />)
  expect(page).toMatchSnapshot()
})
