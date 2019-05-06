import React from 'react';
import {
  HashRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { ApiProvider } from '../ApiContext/ApiProvider';
import Header from '../Header';
import Footer from '../Footer';
import Courses from '../Courses';
import LoginPage from '../LoginPage';
import CreateCourse from '../CreateCourse';
import ErrorPage from '../ErrorPage';
import ProtectedRoute from '../ProtectedRoute';

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
        <ProtectedRoute
          path="/add-course"
          component={CreateCourse}
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
