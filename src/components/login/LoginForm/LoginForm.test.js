import React from 'react'
import {shallow} from 'enzyme'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  let form
  const addUser = jest.fn()

  beforeEach(() => {
    form = shallow(<LoginForm addUser={addUser} />)
  })

  it ('should match the snapshot with all data passed in correctly', () => {
    expect(form).toMatchSnapshot()
  })

  it ('should match the snapshot with error notification', () => {
    form.setState({error: true})

    expect(form).toMatchSnapshot()
  })

  describe("toggleChangeState", () => {

    it('should update name state when toggleChangeState is called with first argument as a name', () => {

      expect(form.state('data').name).toEqual('')

      form.instance().toggleChangeState('name', 'Yoda')

      expect(form.state('data').name).toEqual('Yoda')
    })

    it('should update quote state when toggleChangeState is called with first argument as a favorite quote', () => {

      expect(form.state('data').quote).toEqual('')

      form.instance().toggleChangeState('favorite quote', 'Do. Or do not. There is no try.')

      expect(form.state('data').quote).toEqual('Do. Or do not. There is no try.')
    })

    it('should update rank state when toggleChangeState is called with first argument as a rank', () => {

      expect(form.state('data').rank).toEqual('novice')

      form.instance().toggleChangeState('rank', 'expert')

      expect(form.state('data').rank).toEqual('expert')
    })
  })

  describe("submitUser", () => {

    it('should call submitUser when button was clicked', () => {
      const spy = jest.spyOn(form.instance(), 'submitUser').mockImplementation(() => {});
      form.instance().forceUpdate();

      form.find('button').simulate(
        'click',
        {preventDefault: jest.fn()}
      );

      expect(spy).toHaveBeenCalled();
    })

    it('should call checkError when button was clicked', () => {
      const spy = jest.spyOn(form.instance(), 'checkError').mockImplementation(() => {});
      form.instance().forceUpdate();

      form.find('button').simulate(
        'click',
        {preventDefault: jest.fn()}
      );

      expect(spy).toHaveBeenCalled();
    })

    it('should call addUser prop when button was clicked and all inputs are filled out', () => {

      form.setState({name: 'Yoda', quote: 'Do. Or do not. There is no try.'})

      form.find('button').simulate(
        'click',
        {preventDefault: jest.fn()}
      );

      expect(addUser).toHaveBeenCalled();
    })

    it('should set error to state when button was clicked but all inputs are not filled out', () => {

      expect(form.state('error')).toEqual(false)

      form.find('button').simulate(
        'click',
        {preventDefault: jest.fn()}
      )

      expect(form.state('error')).toEqual(true)

    })
  })
})
