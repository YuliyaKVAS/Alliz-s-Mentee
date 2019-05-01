import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import ApiProvider from '../ApiProvider';
import Header from '../Header';
import Footer from '../Footer';
import Courses from '../Courses';
import LoginPage from '../LoginPage';
import ErrorPage from '../ErrorPage';

const App = () => (
  <ApiProvider>
    <Router>
      <Header />
      <Switch>
        <Route
          path="/"
          exact
        >
          <Redirect to="/courses" />
        </Route>
        <Route
          path="/login"
          component={props => <LoginPage {...props} />}
        />
        <Route
          path="/courses"
          component={props => <Courses {...props} />}
        />
        <Route
          component={ErrorPage}
        />
      </Switch>

      <Footer />
    </Router>
  </ApiProvider>
);

export default App;
