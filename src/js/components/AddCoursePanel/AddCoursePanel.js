import React from 'react';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = () => (
  <div className={styles.panel}>
    <SearchPanel />
    <Button
      variant="contained"
      color="primary"
    >
      Add course
    </Button>
  </div>
);

export default AddCoursePanel;
