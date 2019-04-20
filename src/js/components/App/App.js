import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Courses from '../Courses';
import LoginPage from '../LoginPage';
import ErrorPage from '../ErrorPage';
import ProtectedRoute from '../ProtectedRoute';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <ProtectedRoute
        path="/"
        exact
      >
        <Redirect to="/courses" />
      </ProtectedRoute>
      <Route
        path="/login"
        component={LoginPage}
      />
      <ProtectedRoute
        path="/courses"
        component={Courses}
      />
      <Route component={ErrorPage} />
    </Switch>

    <Footer />
  </Router>
);

export default App;
