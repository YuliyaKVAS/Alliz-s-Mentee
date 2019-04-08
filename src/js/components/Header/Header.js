import React from 'react';
import styles from './Header.less';
import Button from '../Button';

const Header = () => (
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
      >
        log out
      </Button>
    </div>
  </div>
);

export default Header;
