import React from 'react';
import withAppContext from '../withAppContext';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = props => (
  <div className={styles.panel}>
    <SearchPanel />
    {props.context.isAuth && (
      <Button
        variant="contained"
        color="primary"
      >
       Add course
      </Button>
    )}
  </div>

);

export default withAppContext(AddCoursePanel);
