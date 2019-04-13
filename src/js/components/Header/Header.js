import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.less';
import Button from '../Button';

const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };
  const loginLink = props => <Link to="/login" {...props} />;
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
          onClick={handleLogout}
        >
          log out
        </Button>
      </div>
    </div>
  );
};

export default Header;
