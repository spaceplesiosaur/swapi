import React from 'react';
import LoginForm from '../LoginForm/LoginForm'
import './LoginPage.scss';

const LoginPage = ({addUser}) => {

  return (
    <section className="login-page">
      <LoginForm addUser={addUser}/>
    </section>
  )
}

export default LoginPage;
