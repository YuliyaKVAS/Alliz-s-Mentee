import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../services';
import styles from './Header.less';
import Button from '../Button';

const Header = ({ isAuth, setAuth }) => {
  const handleLogout = () => {
    logoutUser();
    setAuth(false);
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
        {!isAuth && (
          <Button
            color="primary"
            variant="contained"
          >
        log in
          </Button>
        )}
        {isAuth && (
          <Button
            color="secondary"
            variant="contained"
            component={loginLink}
            onClick={handleLogout}
          >
          log out
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
