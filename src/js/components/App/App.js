import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Courses from '../Courses';
import Footer from '../Footer';

const App = () => (
  <HashRouter>
    <Route
      path="/courses"
      component={Footer}
    />
    <Route
      path="/"
      exact
      component={Courses}
    />
  </HashRouter>

);

export default App;
