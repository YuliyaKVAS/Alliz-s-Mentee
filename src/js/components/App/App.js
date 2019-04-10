import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Courses from '../Courses';
import LoginPage from '../LoginPage';

const App = () => (
  <HashRouter>
    <Header />
    <Route
      path="/"
      exact
      component={Courses}
    />
    <Route
      path="/courses"
      component={LoginPage}
    />
    <Footer />
  </HashRouter>

);

export default App;
