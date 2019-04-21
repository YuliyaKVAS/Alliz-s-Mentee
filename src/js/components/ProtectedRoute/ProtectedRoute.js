import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => (
  localStorage.getItem('token')
    ? <Route {...props} />
    : (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    )
);

export default ProtectedRoute;
