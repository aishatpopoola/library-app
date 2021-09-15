import React from 'react';
import Main from './Main';

const SignIn = () => (
  <Main title="Sign In">
    <div className="d-flex justify-center align-center column">
      <div className="mt-10">
        <input
          className="input"
          type="text"
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

export default SignIn;
