import React from 'react';
import PropTypes from 'prop-types'
import './LoginInput.scss'

const LoginInput = ({type, value, toggleChangeState}) => {
  const handleChange = (event) => {
    toggleChangeState(type, event.target.value)
  }

  return (
    <section className="login-input">
      <label htmlFor={type.replace(' ', '-')}>{`your ${type}`}</label>
      <input
        id={type.replace(' ', '-')}
        value={value}
        placeholder={`enter your ${type}`}
        onChange={handleChange}/>
    </section>
  )
}

export default LoginInput

LoginInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  toggleChangeState: PropTypes.func.isRequired
}
