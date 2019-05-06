import React from 'react';
import { ApiContext } from './ApiContext';

export const contextConsumer = Component => props => (
  <ApiContext.Consumer>
    {context => <Component {...props} context={context} />}
  </ApiContext.Consumer>
);
