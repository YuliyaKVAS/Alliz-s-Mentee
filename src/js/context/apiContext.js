import React, { PureComponent } from 'react';
import { isUserAuth } from '../helpers';

export const ApiContext = React.createContext();

export class ApiProvider extends PureComponent {
    state = {
      isAuth: false
    };

    componentDidMount() {
      this.setState({ isAuth: isUserAuth() });
    }

    setAuth = isLogin => this.setState({ isAuth: isLogin });

    render() {
      return (
        <ApiContext.Provider
          value={{
            isAuth: this.state.isAuth,
            setAuth: this.setAuth
          }}
        >
          {this.props.children}
        </ApiContext.Provider>
      );
    }
}

export const contextConsumer = Component => props => (
  <ApiContext.Consumer>
    {context => <Component {...props} context={context} />}
  </ApiContext.Consumer>
);
