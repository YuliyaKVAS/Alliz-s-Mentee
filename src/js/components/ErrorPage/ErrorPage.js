import React from 'react';

import styles from './ErrorPage.less';

const ErrorPage = () => (
  <div className={styles.container}>
    <span className={styles.error}>
      404
    </span>
    <span className={styles.info}>
      Page not found :(
    </span>
  </div>
);

export default ErrorPage;
