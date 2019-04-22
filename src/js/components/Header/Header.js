import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {
  headerWrapper, logoName, logo, name, loginButtons
} from './Header.less';
import Button from '../Button';

const loginLink = props => <Link to="/login" {...props} />;
class Header extends PureComponent {
  handleLogout = () => {
    localStorage.removeItem('token');
  }

  render() {
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
          <Button
            color="primary"
            variant="contained"
          >
      log in
          </Button>
          <Button
            color="secondary"
            variant="contained"
            component={loginLink}
            onClick={this.handleLogout}
          >
        log out
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
