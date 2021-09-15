import React from 'react';

const Home = () => (
  <div className="d-flex justify-center align-center">
    <div>
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
  </div>
);

export default Home;
