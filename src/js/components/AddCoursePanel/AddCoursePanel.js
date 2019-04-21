import React from 'react';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = ({ isAuth, search, handleSearchChange, handleSubmitSearch }) => (
  <div className={styles.panel}>
    <SearchPanel
      search={search}
      handleSearchChange={handleSearchChange}
      handleSubmitSearch={handleSubmitSearch}
    />
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
