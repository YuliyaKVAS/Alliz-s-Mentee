import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services';
import styles from './Header.less';
import Button from '../Button';

const loginLink = props => <Link to="/login" {...props} />;
class Header extends PureComponent {
  handleLogout = () => {
    logoutUser();
    this.props.setAuth(false);
  }

  render() {
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.logoName}>
          <div className={styles.logo}>
           Logo
          </div>
          <div className={styles.name}>
          Name
          </div>
        </div>

        <div className={styles.loginButtons}>
          {!this.props.isAuth && (
            <Button
              color="primary"
              variant="contained"
              component={loginLink}
            >
        log in
            </Button>
          )}
          {this.props.isAuth && (
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
