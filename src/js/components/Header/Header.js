import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services';
import {
  headerWrapper, logoName, logo, name, loginButtons
} from './Header.less';
import Button from '../Button';

const loginLink = props => <Link to="/login" {...props} />;
class Header extends PureComponent {
  handleLogout = () => {
    logoutUser();
    this.props.setAuth(false);
  }

  render() {
    const { isAuth } = this.props;
    return (
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
          {!isAuth && (
            <Button
              color="primary"
              variant="contained"
              component={loginLink}
            >
        log in
            </Button>
          )}
          {isAuth && (
            <Button
              color="secondary"
              variant="contained"
              component={loginLink}
              onClick={this.handleLogout}
            >
          log out
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Header;
