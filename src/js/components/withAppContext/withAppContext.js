import React from 'react';
import ApiContext from '../ApiContext';

export const withAppContext = Component => props => (
  <ApiContext.Consumer>
    {context => <Component {...props} context={context} />}
  </ApiContext.Consumer>
);

export default withAppContext;
