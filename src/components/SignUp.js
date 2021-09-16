import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Main from './Main';
import { authUser } from '../actions';
import alert from '../utils/alert';
import token from '../utils/jwt';

const SignUp = ({ signUpUser }) => {
  const message = useSelector(state => state.auth.error);
  const username = useSelector(state => state.username);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    signUpUser(values, 'sign-up');
    setValues({
      ...values,
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
    if (message) {
      alert('Error in Connection', 'alert_danger');
    }
  };

  if (username === 'invalid' || username === '') {
    token.clearToken();
  } else if (username !== 'invalid' && username) {
    return <Redirect to="/" />;
  }
  return (
  <Main title="Sign Up">
    <form className="d-flex justify-center align-center column" onSubmit={handleSubmit}>
      <div className="mt-10">
        <input
          className="input"
         name="name"
         type="text"
         value={values.name}
         onChange={e => setValues({ ...values, name: e.target.value })}
         placeholder="Enter Name"
         required
        />
      </div>
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
        <input
          className="input"
          name="password_confirmation"
          type="password"
          value={values.password_confirmation}
          onChange={e => setValues({ ...values, password_confirmation: e.target.value })}
          placeholder="Confirm Password"
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
  signUpUser: (values, type) => dispatch(authUser(values, type)),
});

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
