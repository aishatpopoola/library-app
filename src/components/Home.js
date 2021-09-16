import React from 'react';
import { Redirect } from 'react-router-dom';
import token from '../utils/jwt';
import Main from './Main';

const Home = () => {
  const authToken = token.getToken();
  if (!authToken) {
    return <Redirect to="/sign-in" />;
  }
  return (
    <Main title="Welcome To Library App">
        <div className="d-flex justify-center align-center">
            <div>
                <h2>Home Page</h2>
            </div>
        </div>
    </Main>
  );
};

export default Home;
