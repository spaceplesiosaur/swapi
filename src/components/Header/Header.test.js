import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {

  it('should render Header with all data passed in correctly', () => {
    const wrapper = shallow(
      <Header
        user={{
          name: 'Taylor Swift',
          quote: "I find your lack of faith disturbing",
          rank: 'intermediate'}}
        logOut={jest.fn()}
        headerText={'Episode 1: Revenge of the Sloths'}
        isButton={true}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})
