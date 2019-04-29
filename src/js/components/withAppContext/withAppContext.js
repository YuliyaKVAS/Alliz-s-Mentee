import React from 'react';
import ApiContext from '../ApiContext';

export function withAppContext(Component) {
  return function WrapperComponent(props) {
    return (
      <ApiContext.Consumer>
        {context => <Component {...props} context={context} />}
      </ApiContext.Consumer>
    );
  };
}

export default withAppContext;
