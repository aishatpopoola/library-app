import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Route path="/books" component={BooksList} />
        <Route path="/sign-up" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/edit-book/:id" component={EditBook} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
