import React, { PureComponent } from 'react';
import ApiContext from '../ApiContext';
import { isUserAuth } from '../../helpers';

class ApiProvider extends PureComponent {
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

export default ApiProvider;
