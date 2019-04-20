import React from 'react';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = ({ isAuth }) => (
  <div className={styles.panel}>
    <SearchPanel />
    {isAuth && (
      <Button
        variant="contained"
        color="primary"
      >
      Add course
      </Button>
    )}
  </div>
);

export default AddCoursePanel;
