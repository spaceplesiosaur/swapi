import React from 'react';
import PropTypes from 'prop-types'
import './LoginRadioButton.scss'

const LoginRadioButton = ({type, currentRank, toggleChangeState}) => {
  const handleChanges = (event) => {
    toggleChangeState(type, event.target.value)
  }

  return (
    <div className="radio-button-wrapper">
      <input
        id={type}
        type="radio"
        value={type}
        onChange={handleChanges}
        checked={currentRank === type} />
      <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
    </div>
  )
}

export default LoginRadioButton

LoginRadioButton.propTypes = {
  type: PropTypes.string,
  currentRank: PropTypes.string,
  toggleChangeState: PropTypes.func
}
