import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
