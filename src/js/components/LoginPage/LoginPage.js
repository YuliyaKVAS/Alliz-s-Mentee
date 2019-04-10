import React from 'react';
import TextField from '../TextField';
import Button from '../Button';
import styles from './LoginPage.less';

const LoginPage = () => (
  <div className={styles.logInForm}>
    <TextField
      label="Email"
      variant="outlined"
    />
    <TextField
      label="Password"
      type="password"
      variant="outlined"
    />
    <Button
      color="primary"
      variant="outlined"
    >
     Log in
    </Button>
  </div>
);

export default LoginPage;
