import React from 'react';
import { Redirect } from 'react-router-dom';
import token from '../utils/jwt';
import Main from './Main';

const SignUp = () => {
  const authToken = token.getToken();
  if (authToken) {
    return <Redirect to="/" />;
  }
  return (
  <Main title="Sign Up">
    <div className="d-flex justify-center align-center column">
      <div className="mt-10">
        <input
          className="input"
          type="text"
          required
          placeholder="Enter Name"
        />
      </div>
      <div className="mt-10">
        <input
          className="input"
          type="email"
          required
          placeholder="Enter email"
        />
      </div>
      <div className="mt-10">
        <input
          className="input"
          type="password"
          required
          placeholder="Enter password"
        />
      </div>
      <div className="mt-10">
        <button className="input" type="submit">
          Sign In
        </button>
      </div>
    </div>
  </Main>
  );
};

export default SignUp;
