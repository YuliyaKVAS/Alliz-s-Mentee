import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.less';
import Button from '../Button';

const loginLink = props => <Link to="/login" {...props} />;
class Header extends PureComponent {
  handleLogout = () => {
    localStorage.removeItem('token');
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
