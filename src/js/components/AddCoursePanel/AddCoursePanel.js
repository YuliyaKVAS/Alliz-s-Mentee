import React from 'react';
import ApiContext from '../ApiContext';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = () => (
  <ApiContext.Consumer>
    {api => (
      <div className={styles.panel}>
        <SearchPanel />
        {api.isAuth && (
          <Button
            variant="contained"
            color="primary"
          >
    Add course
          </Button>
        )}
      </div>
    )}
  </ApiContext.Consumer>

);

export default AddCoursePanel;
