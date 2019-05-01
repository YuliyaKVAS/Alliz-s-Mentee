import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import withAppContext from '../withAppContext';
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
          {!this.props.context.isAuth && (
            <Button
              color="primary"
              variant="contained"
              component={loginLink}
            >
              log in
            </Button>
          )}
          {this.props.context.isAuth && (
            <Button
              color="secondary"
              variant="contained"
              component={loginLink}
              onClick={this.handleLogout(this.props.context.setAuth)}
            >
              log out
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default withAppContext(Header);
