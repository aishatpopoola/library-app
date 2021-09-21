import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Main from './Main';
import { authUser } from '../actions';
import alert from '../utils/alert';
import token from '../utils/jwt';

const SignIn = ({ signinUser }) => {
  const message = useSelector(state => state.auth.error);
  const username = useSelector(state => state.username);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    signinUser(values, 'sign-in');
    setValues({
      ...values,
      email: '',
      password: '',
    });
    if (message) {
      alert('Error in Connection', 'alert_danger');
    }
  };
  if (username === 'invalid' || username === '') {
    token.clearToken();
  } else if (username !== 'invalid') {
    return <Redirect to="/" />;
  }

  return (
  <Main title="Sign In">
    <form className="d-flex justify-center align-center column" onSubmit={handleSubmit}>
      <div className="mt-10">
        <input
          className="input"
          name="email"
          type="email"
          value={values.email}
          onChange={e => setValues({ ...values, email: e.target.value })}
          placeholder="Enter Email"
          required
        />
      </div>
      <div className="mt-10">
        <input
          className="input"
          type="password"
          value={values.password}
          onChange={e => setValues({ ...values, password: e.target.value })}
          placeholder="Enter Password"
          required
        />
      </div>
      <div className="mt-10">
        <button className="input" type="submit">
          Sign In
        </button>
      </div>
    </form>
  </Main>
  );
};

const mapDispatchToProps = dispatch => ({
  signinUser: (values, type) => dispatch(authUser(values, type)),
});

SignIn.propTypes = {
  signinUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
