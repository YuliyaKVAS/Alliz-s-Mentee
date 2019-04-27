import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import { logoutUser } from '../../services';
import {
  headerWrapper, logoName, logo, name, loginButtons
} from './Header.less';
import Button from '../Button';

const loginLink = props => <Link to="/login" {...props} />;
class Header extends PureComponent {
  handleLogout = setAuth => () => {
    logoutUser();
    setAuth(false);
  }

  render() {
    return (
      <ApiContext.Consumer>
        {api => (
          <div className={headerWrapper}>
            <div className={logoName}>
              <div className={logo}>
                Logo
              </div>
              <div className={name}>
                Name
              </div>
            </div>

            <div className={loginButtons}>
              {!api.isAuth && (
                <Button
                  color="primary"
                  variant="contained"
                  component={loginLink}
                >
                  log in
                </Button>
              )}
              {api.isAuth && (
                <Button
                  color="secondary"
                  variant="contained"
                  component={loginLink}
                  onClick={this.handleLogout(api.setAuth)}
                >
                 log out
                </Button>
              )}
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}

export default Header;
