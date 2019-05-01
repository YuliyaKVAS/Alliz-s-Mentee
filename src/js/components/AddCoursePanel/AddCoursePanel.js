import React from 'react';
import withAppContext from '../withAppContext';
import SearchPanel from '../SearchPanel';
import Button from '../Button';
import styles from './AddCoursePanel.less';

const AddCoursePanel = ({
  search, handleSearchChange, handleSubmitSearch, ...props
}) => (
  <div className={styles.panel}>
    <SearchPanel
      search={search}
      handleSearchChange={handleSearchChange}
      handleSubmitSearch={handleSubmitSearch}
    />
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
